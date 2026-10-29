// Parity test: browser engine (realEngine.ts) vs Python export reference.
// Usage: npx tsx scripts/test_real_engine.ts public/miora/real_demo.json <reference.json>
import { readFileSync } from "fs";
import { prepare, evaluate, summarize, RealDemoData } from "../src/lib/miora/realEngine";

const [demoPath, refPath] = process.argv.slice(2);
const demo = prepare(JSON.parse(readFileSync(demoPath, "utf8")) as RealDemoData);
const ref = JSON.parse(readFileSync(refPath, "utf8"));
const { T, D } = demo.raw.dims;
let maxV = 0, maxP = 0, maxQ = 0, signFlips = 0, guardFlips = 0, n = 0;
const m = demo.raw.model;
ref.snr.forEach((snr: number, s: number) => {
  for (let t = 0; t < T; t++) for (let j = 0; j < D; j++) {
    const r = evaluate(demo, t, j, snr);
    const v = ref.v[s][t][j], p = ref.p[s][t][j], q = ref.q[s][t][j];
    maxV = Math.max(maxV, Math.abs(r.v - v)); maxP = Math.max(maxP, Math.abs(r.p - p)); maxQ = Math.max(maxQ, Math.abs(r.q - q));
    if ((r.v > 0) !== (v > 0) || (r.p > 0) !== (p > 0)) signFlips++;
    const swPy = m.enabled && q > m.tau && (v > 0) !== (p > 0) && Math.abs(p) >= m.kappa * Math.abs(v);
    if (swPy !== r.switched) guardFlips++;
    n++;
  }
});
let maxClean = 0;
for (let t = 0; t < T; t++) {
  const r = evaluate(demo, t, 0, null);
  maxClean = Math.max(maxClean, Math.abs(r.v - ref.clean_v[t]), Math.abs(r.p - ref.clean_p[t]), Math.abs(r.q - ref.clean_q[t]));
}
const sm = summarize(demo);
console.log(JSON.stringify({ n, maxV, maxP, maxQ, maxClean, signFlips, guardFlips }));
console.log("browser summary:", JSON.stringify(sm));
console.log("python  summary:", JSON.stringify(ref.summary));
const ok = maxV < 1e-3 && maxP < 1e-3 && maxQ < 1e-4 && maxClean < 1e-3 && signFlips === 0 && guardFlips === 0 &&
  Math.abs(sm.errC - ref.summary.C[0]) < 1e-9 && Math.abs(sm.errM - ref.summary.M[0]) < 1e-9 &&
  Math.abs(sm.harmC - ref.summary.C[1]) < 1e-9 && Math.abs(sm.harmM - ref.summary.M[1]) < 1e-9;
console.log(ok ? "PARITY OK" : "PARITY FAILED");
process.exit(ok ? 0 : 1);
