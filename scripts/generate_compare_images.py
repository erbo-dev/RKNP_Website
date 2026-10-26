import os
import math
from PIL import Image, ImageDraw, ImageFont

os.makedirs('public/images', exist_ok=True)
W, H = 540, 720

def create_eeg_image(is_protected=False):
    # Dark clinical surface
    bg_color = (12, 14, 18)
    img = Image.new('RGB', (W, H), color=bg_color)
    draw = ImageDraw.Draw(img)

    # Grid lines
    for y in range(40, H, 40):
        draw.line([(0, y), (W, y)], fill=(25, 30, 38), width=1)
    for x in range(40, W, 40):
        draw.line([(x, 0), (x, H)], fill=(25, 30, 38), width=1)

    # Channels
    channels = ["C3 [Motor]", "Cz [Sensory]", "C4 [Motor]", "F3 [Frontal]", "T3 [Temporal/EMG]", "T4 [Temporal/EMG]"]
    n_ch = len(channels)
    row_h = (H - 120) / n_ch

    for idx, ch in enumerate(channels):
        base_y = 80 + idx * row_h + row_h / 2
        # Label
        draw.text((20, int(base_y - 20)), ch, fill=(155, 163, 175))

        points = []
        for x in range(120, W - 20):
            t = (x - 120) * 0.05
            if not is_protected:
                # Contaminated by intense high frequency EMG bursts
                noise = math.sin(t * 18) * 16 + math.cos(t * 31) * 12 + math.sin(t * 47) * 8
                signal = math.sin(t * 2) * 12 + noise * (1.2 if idx >= 4 else 0.7)
                color = (255, 82, 82) if idx >= 4 else (255, 171, 0)
            else:
                # Protected: clean smooth motor rhythm, artifacts attenuated
                signal = math.sin(t * 2) * 14 + math.cos(t * 4.5) * 4
                color = (0, 229, 255) if idx < 4 else (0, 230, 118)

            points.append((x, base_y + signal))

        for i in range(len(points) - 1):
            draw.line([points[i], points[i+1]], fill=color, width=2)

    # Header and badge
    status_text = "MIORA CASCADE PROTECTED // INTENT VERIFIED" if is_protected else "RAW EEG RECORDING // CHEWING ARTIFACT DETECTED"
    badge_bg = (0, 50, 40) if is_protected else (60, 20, 20)
    badge_fg = (0, 230, 118) if is_protected else (255, 82, 82)
    draw.rectangle([(20, 20), (W - 20, 55)], fill=badge_bg, outline=badge_fg, width=1)
    draw.text((32, 28), status_text, fill=badge_fg)

    # Telemetry footer
    footer_text = "ACCURACY: 94.2%  |  HARMFUL OVERRIDE: 0.0%  |  GATE: PASSED" if is_protected else "SNR: -12.4 dB  |  HIGH-FREQ NOISE > THRESHOLD  |  DEC: UNCERTAIN"
    draw.rectangle([(20, H - 45), (W - 20, H - 15)], fill=(18, 21, 27), outline=(40, 48, 60), width=1)
    draw.text((32, H - 38), footer_text, fill=(155, 163, 175))

    return img

img_before = create_eeg_image(is_protected=False)
img_before.save('public/images/eeg_contaminated.jpg', quality=95)

img_after = create_eeg_image(is_protected=True)
img_after.save('public/images/eeg_miora_protected.jpg', quality=95)

print("Generated comparison images successfully!")
