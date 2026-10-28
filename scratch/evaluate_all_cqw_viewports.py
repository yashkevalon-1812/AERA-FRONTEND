import numpy as np
from PIL import Image, ImageDraw, ImageFont

# Load images
ref = Image.open(r'C:\Users\divye\.gemini\antigravity\brain\a40e8476-2329-48c2-8837-b12cf6408663\exact_banner_ref.png').convert('RGB')
live = Image.open(r'C:\Users\divye\.gemini\antigravity\brain\a40e8476-2329-48c2-8837-b12cf6408663\live_1024_calibrated.png').convert('RGB')

if live.size != (1024, 400):
    live = live.resize((1024, 400), Image.Resampling.LANCZOS)

# Create 2-row stacked comparison
w, h = 1024, 400
header_h = 32
composite = Image.new('RGB', (w, h * 2 + header_h * 2), (245, 245, 247))
draw = ImageDraw.Draw(composite)

try:
    font = ImageFont.truetype("arial.ttf", 16)
except:
    font = ImageFont.load_default()

# Header 1: Reference
draw.rectangle([(0, 0), (w, header_h)], fill=(40, 40, 45))
draw.text((16, 7), "REFERENCE DESIGN (1024 x 400 px)", fill=(255, 255, 255), font=font)
composite.paste(ref, (0, header_h))

# Header 2: Live
y2 = header_h + h
draw.rectangle([(0, y2), (w, y2 + header_h)], fill=(28, 90, 60))
draw.text((16, y2 + 7), "LIVE CALIBRATED PROPORTIONAL RECREATION (1024 x 400 px)", fill=(255, 255, 255), font=font)
composite.paste(live, (0, y2 + header_h))

output_path = r'C:\Users\divye\.gemini\antigravity\brain\a40e8476-2329-48c2-8837-b12cf6408663\final_calibrated_side_by_side.png'
composite.save(output_path, quality=95)
print('Saved final_calibrated_side_by_side.png successfully!')

ref_arr = np.array(ref)
live_arr = np.array(live)

diff_l = np.abs(ref_arr[90:300, 30:350].astype(int) - live_arr[90:300, 30:350].astype(int))
diff_r = np.abs(ref_arr[80:310, 512+30:512+350].astype(int) - live_arr[80:310, 512+30:512+350].astype(int))

print('Mean diff left text area:', np.mean(diff_l))
print('Mean diff right text area:', np.mean(diff_r))
