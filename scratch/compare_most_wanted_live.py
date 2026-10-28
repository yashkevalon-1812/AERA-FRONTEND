import numpy as np
from PIL import Image, ImageDraw, ImageFont

ref = Image.open(r'C:\Users\divye\.gemini\antigravity\brain\a40e8476-2329-48c2-8837-b12cf6408663\.user_uploaded\media_1793191509958_4f3524e7.png').convert('RGB')
live = Image.open(r'C:\Users\divye\.gemini\antigravity\brain\a40e8476-2329-48c2-8837-b12cf6408663\most_wanted_live_1024.png').convert('RGB')

print('Ref size:', ref.size)
print('Live size:', live.size)

# Resize live to ref size if slightly off by a few pixels
if live.size != ref.size:
    live = live.resize(ref.size, Image.Resampling.LANCZOS)

# Create 2-row stacked comparison
w, h = ref.size
header_h = 32
composite = Image.new('RGB', (w, h * 2 + header_h * 2), (245, 245, 247))
draw = ImageDraw.Draw(composite)

try:
    font = ImageFont.truetype("arial.ttf", 16)
except:
    font = ImageFont.load_default()

# Header 1: Reference
draw.rectangle([(0, 0), (w, header_h)], fill=(40, 40, 45))
draw.text((16, 7), "REFERENCE DESIGN: MOST WANTED (1024 x 486 px)", fill=(255, 255, 255), font=font)
composite.paste(ref, (0, header_h))

# Header 2: Live
y2 = header_h + h
draw.rectangle([(0, y2), (w, y2 + header_h)], fill=(151, 23, 58)) # signature burgundy
draw.text((16, y2 + 7), "LIVE IMPLEMENTATION: MOST WANTED (1024 x 486 px)", fill=(255, 255, 255), font=font)
composite.paste(live, (0, y2 + header_h))

out_path = r'C:\Users\divye\.gemini\antigravity\brain\a40e8476-2329-48c2-8837-b12cf6408663\most_wanted_side_by_side.png'
composite.save(out_path, quality=95)
print('Saved most_wanted_side_by_side.png successfully!')

ref_arr = np.array(ref)
live_arr = np.array(live)
diff = np.abs(ref_arr.astype(int) - live_arr.astype(int))

print('Overall mean diff:', np.mean(diff))

# Title area diff: x=300..724, y=50..110
diff_title = np.mean(diff[50:110, 300:724])
print('Title area diff:', diff_title)

# Cards area diff: x=65..961, y=120..440
diff_cards = np.mean(diff[120:440, 65:961])
print('Cards area diff:', diff_cards)
