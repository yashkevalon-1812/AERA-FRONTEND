import numpy as np
from PIL import Image

img = Image.open(r'C:\Users\divye\.gemini\antigravity\brain\a40e8476-2329-48c2-8837-b12cf6408663\.user_uploaded\media_1793203527885_ecf0643e.png').convert('RGB')
arr = np.array(img)

# Container is x=[48, 977], y=[42, 314] (930 x 273)
container = img.crop((48, 42, 978, 315))
container.save(r'C:\Users\divye\.gemini\antigravity\brain\a40e8476-2329-48c2-8837-b12cf6408663\raw_wear_what_moves_you.png')
print('Saved raw container!')

# 1. Inspect Big Heading "WEAR WHAT MOVES YOU"
# It is around x=500..800, y=100..200
# Text is white/light
crop_heading = arr[90:200, 500:800]
h_mask = np.all(crop_heading > [180, 180, 180], axis=-1)
y_idx, x_idx = np.where(h_mask)
print(f'Heading in canvas: x=[{500+np.min(x_idx)}, {500+np.max(x_idx)}] (w={np.max(x_idx)-np.min(x_idx)+1}), y=[{90+np.min(y_idx)}, {90+np.max(y_idx)}] (h={np.max(y_idx)-np.min(y_idx)+1})')

# 2. Inspect Subtitle
# It is around x=80..400, y=180..240
crop_sub = arr[180:240, 80:400]
s_mask = np.all(crop_sub > [170, 170, 170], axis=-1)
y_s, x_s = np.where(s_mask)
print(f'Subtitle in canvas: x=[{80+np.min(y_s)}, {80+np.max(x_s)}] (w={np.max(x_s)-np.min(x_s)+1}), y=[{180+np.min(y_s)}, {180+np.max(y_s)}] (h={np.max(y_s)-np.min(y_s)+1})')

# 3. Inspect Button "DISCOVER OUR STORY"
# It is around x=80..280, y=240..300
crop_btn = arr[240:300, 80:280]
# Button background is cream / light beige (e.g. [240..250, 235..245, 220..235])
b_mask = np.all(crop_btn > [220, 215, 205], axis=-1)
y_b, x_b = np.where(b_mask)
print(f'Button in canvas: x=[{80+np.min(x_b)}, {80+np.max(x_b)}] (w={np.max(x_b)-np.min(x_b)+1}), y=[{240+np.min(y_b)}, {240+np.max(y_b)}] (h={np.max(y_b)-np.min(y_b)+1})')
print('Button mean background color:', np.mean(crop_btn[b_mask], axis=0))
