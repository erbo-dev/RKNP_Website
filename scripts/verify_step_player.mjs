import fs from "fs";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";

const rootDir = process.cwd();
const componentPath = path.join(rootDir, "src", "components", "StepPlayer.tsx");
const cssPath = path.join(rootDir, "src", "app", "globals.css");

console.log("=== STEP PLAYER VERIFICATION SUITE ===");

// 1. Verify file exists
if (!fs.existsSync(componentPath)) {
  console.error("FAIL: Component file does not exist at:", componentPath);
  process.exit(1);
}
console.log("PASS: Component file exists at src/components/StepPlayer.tsx");

const componentContent = fs.readFileSync(componentPath, "utf-8");

// 2. Verify all comments from original specification are preserved
const requiredComments = [
  "══ Step player ══════════════════════════════════════════",
  "── EVERY DOT IS A PILL WITH TWO EDGES ──────────────────",
  "── THE WAKE ────────────────────────────────────────────",
  "── inlined from lab/spring ────────────────────────",
  "── one spring, for everything that settles ───────────────",
  "Read once, the way the wheel and the pill nav do. A",
  "── inlined from lab/Sound ────────────────────────",
  "══ Sound ════════════════════════════════════════════════",
  "── the play mark is DRAWN, not swapped ───────────────────",
  "── the goo ─────────────────────────────────────────────",
  "── OUT, NOT IN-OUT ─────────────────────────────────────",
  "── changing step ───────────────────────────────────────"
];

for (const comment of requiredComments) {
  if (!componentContent.includes(comment)) {
    console.error(`FAIL: Missing required comment: "${comment}"`);
    process.exit(1);
  }
}
console.log("PASS: All critical design & mathematical comments preserved.");

// 3. Verify CSS properties in globals.css
const cssContent = fs.readFileSync(cssPath, "utf-8");

const requiredTokens = [
  "--card",
  "--fill-on",
  "--fill-on-rgb",
  "--fill-slab",
  "--font-ui",
  "--ink",
  "--ink-2",
  "--ink-rgb",
  "--pane-edge"
];

// Check they are defined under .spl
const splBlockMatch = cssContent.match(/\.spl\s*\{([^}]+)\}/);
if (!splBlockMatch) {
  console.error("FAIL: .spl class selector not found in globals.css");
  process.exit(1);
}

const splBlock = splBlockMatch[1];
for (const token of requiredTokens) {
  if (!splBlock.includes(`${token}:`)) {
    console.error(`FAIL: Token ${token} not defined in .spl block`);
    process.exit(1);
  }
}
console.log("PASS: All 9 design tokens are defined within .spl block.");

// Check nothing leaked into :root
const rootBlockMatch = cssContent.match(/:root\s*\{([^}]+)\}/);
if (rootBlockMatch) {
  const rootBlock = rootBlockMatch[1];
  for (const token of requiredTokens) {
    if (rootBlock.includes(`${token}:`)) {
      console.error(`FAIL: Token ${token} was leaked into global :root!`);
      process.exit(1);
    }
  }
}
console.log("PASS: No tokens leaked into global :root.");

// 4. Verify RGB tokens format: three bare numbers
const rgbTokens = ["--fill-on-rgb", "--ink-rgb"];
for (const rgbToken of rgbTokens) {
  const match = splBlock.match(new RegExp(`${rgbToken}:\\s*([^;]+);`));
  if (!match) {
    console.error(`FAIL: Could not find ${rgbToken} definition.`);
    process.exit(1);
  }
  const val = match[1].trim();
  const bareNumbersRegex = /^\d+\s*,\s*\d+\s*,\s*\d+$/;
  if (!bareNumbersRegex.test(val)) {
    console.error(`FAIL: ${rgbToken} is not three bare numbers! Got: "${val}"`);
    process.exit(1);
  }
  console.log(`PASS: ${rgbToken} has valid three bare numbers format: "${val}"`);
}

// 5. Test SSR Component Rendering
async function testRender() {
  // Transpiled by Next.js in node or dynamic import
  // Let's dynamically import the component
  try {
    const { StepPlayer, MIN_STEPS, MAX_STEPS } = await import("../src/components/StepPlayer.tsx");
    console.log(`PASS: Exported constants: MIN_STEPS=${MIN_STEPS}, MAX_STEPS=${MAX_STEPS}`);

    // Default render
    const defaultHtml = ReactDOMServer.renderToString(React.createElement(StepPlayer));
    if (!defaultHtml.includes('class="spl"') || !defaultHtml.includes('class="spl-row"')) {
      console.error("FAIL: Rendered HTML does not contain spl or spl-row");
      process.exit(1);
    }
    console.log("PASS: Default StepPlayer rendered cleanly (length: " + defaultHtml.length + ")");

    // Boundary edge cases
    // steps = 1 (should clamp to MIN_STEPS = 3)
    const minClamped = ReactDOMServer.renderToString(React.createElement(StepPlayer, { steps: 1 }));
    const dotCountMin = (minClamped.match(/class="spl-dot"/g) || []).length;
    if (dotCountMin !== MIN_STEPS) {
      console.error(`FAIL: Clamped min dots expected ${MIN_STEPS}, got ${dotCountMin}`);
      process.exit(1);
    }
    console.log(`PASS: Boundary steps=1 correctly clamped to ${MIN_STEPS} dots.`);

    // steps = 100 (should clamp to MAX_STEPS = 8)
    const maxClamped = ReactDOMServer.renderToString(React.createElement(StepPlayer, { steps: 100 }));
    const dotCountMax = (maxClamped.match(/class="spl-dot"/g) || []).length;
    if (dotCountMax !== MAX_STEPS) {
      console.error(`FAIL: Clamped max dots expected ${MAX_STEPS}, got ${dotCountMax}`);
      process.exit(1);
    }
    console.log(`PASS: Boundary steps=100 correctly clamped to ${MAX_STEPS} dots.`);

    // Boundary wake = -20 and wake = 200
    const wakeNeg = ReactDOMServer.renderToString(React.createElement(StepPlayer, { wake: -20, pace: 0.1 }));
    console.log("PASS: Boundary wake=-20, pace=0.1 rendered cleanly.");

    console.log("=== ALL VERIFICATION TESTS PASSED SUCCESSFULLY ===");
  } catch (err) {
    console.error("FAIL in testRender:", err);
    process.exit(1);
  }
}

testRender();
