import numpy as np
from PIL import Image, ImageDraw, ImageFont

ref = Image.open(r'C:\Users\divye\.gemini\antigravity\brain\a40e8476-2329-48c2-8837-b12cf6408663\.user_uploaded\media_1793190663373_4a8678e1.png').convert('RGB')
live = Image.open(r'C:\Users\divye\.gemini\antigravity\brain\a40e8476-2329-48c2-8837-b12cf6408663\trending_live_1024.png').convert('RGB')

print('Ref size:', ref.size)
print('Live size:', live.size)

# Resize live to ref size if slightly off by 1-2px
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
draw.text((16, 7), "REFERENCE DESIGN: TRENDING NOW (1024 x 484 px)", fill=(255, 255, 255), font=font)
composite.paste(ref, (0, header_h))

# Header 2: Live
y2 = header_h + h
draw.rectangle([(0, y2), (w, y2 + header_h)], fill=(154, 31, 64)) # signature burgundy
draw.text((16, y2 + 7), "LIVE IMPLEMENTATION: TRENDING NOW (1024 x 484 px)", fill=(255, 255, 255), font=font)
composite.paste(live, (0, y2 + header_h))

out_path = r'C:\Users\divye\.gemini\antigravity\brain\a40e8476-2329-48c2-8837-b12cf6408663\trending_side_by_side.png'
composite.save(out_path, quality=95)
print('Saved trending_side_by_side.png successfully!')

# Calculate mean diff
ref_arr = np.array(ref)
live_arr = np.array(live)
diff = np.abs(ref_arr.astype(int) - live_arr.astype(int))

print('Overall mean diff:', np.mean(diff))

# Heading area diff: x=40..320, y=40..160
diff_head = np.mean(diff[40:160, 40:320])
print('Headline area diff:', diff_head)

# Card 1 diff: x=43..325, y=174..449
diff_c1 = np.mean(diff[174:449, 43:325])
print('Card 1 area diff:', diff_c1)

# Card 2 diff: x=351..674, y=33..449
diff_c2 = np.mean(diff[33:449, 351:674])
print('Card 2 area diff:', diff_c2)

# Card 3 diff: x=701..983, y=33..327
diff_c3 = np.mean(diff[33:327, 701:983])
print('Card 3 area diff:', diff_c3)

# Description text area diff: x=700..950, y=350..440
diff_desc = np.mean(diff[350:440, 700:950])
print('Description area diff:', diff_desc)
