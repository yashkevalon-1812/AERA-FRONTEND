import numpy as np
from PIL import Image

img = Image.open('C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/raw_footer_ref.png').convert('RGB')
arr = np.array(img)
H, W, _ = arr.shape
print(f'Canvas size: {W} x {H}')

# Background color sample (right side or top corner where there is no model)
bg_sample = arr[20:50, 850:950]
print('Background RGB mean:', np.mean(bg_sample, axis=(0,1)))
rgb = np.mean(bg_sample, axis=(0,1)).astype(int)
print(f'Background hex: #{rgb[0]:02X}{rgb[1]:02X}{rgb[2]:02X}')

# 1. AERA Wordmark
# Center top around x=400..624, y=40..110
crop_aera = arr[40:110, 420:600]
mask_aera = np.all(crop_aera > [200, 190, 180], axis=-1)
ay, ax = np.where(mask_aera)
print(f'AERA Wordmark: x=[{420+np.min(ax)}, {420+np.max(ax)}] (w={np.max(ax)-np.min(ax)+1}), y=[{40+np.min(ay)}, {40+np.max(ay)}] (h={np.max(ay)-np.min(ay)+1})')

# 2. Row 1 Navigation: NEW COLLECTIONS | EVERYDAY ESSENTIALS | MODERN CLASSICS
# Around y=110..150, x=200..800
crop_row1 = arr[110:145, 200:824]
mask_row1 = np.all(crop_row1 > [170, 160, 150], axis=-1)
r1y, r1x = np.where(mask_row1)
print(f'Row 1 Nav: x=[{200+np.min(r1x)}, {200+np.max(r1x)}] (w={np.max(r1x)-np.min(r1x)+1}), y=[{110+np.min(r1y)}, {110+np.max(r1y)}] (h={np.max(r1y)-np.min(r1y)+1})')

# 3. Horizontal Line
# Around y=145..165, x=30..994
crop_line = arr[145:165, :]
# Line is subtle light stroke
line_mask = np.all(crop_line > [120, 110, 100], axis=-1) & (np.std(crop_line, axis=-1) < 10)
ly, lx = np.where(line_mask)
# Find the exact horizontal line row
row_counts = np.sum(crop_line > [110, 100, 90], axis=(1,2))
best_y = 145 + np.argmax(row_counts)
print(f'Divider line at approx y={best_y}')

# Let's find divider line x_start and x_end
line_row = arr[155, :, :]
diff_line = np.linalg.norm(line_row.astype(float) - rgb, axis=-1)
line_cols = np.where(diff_line > 15)[0]
if len(line_cols) > 0:
    print(f'Line x=[{np.min(line_cols)}, {np.max(line_cols)}] (w={np.max(line_cols)-np.min(line_cols)+1})')

# 4. Row 2 Navigation: ABOUT | HELP | CONTACT | COLLECTION | SHOP GUIDE
# Around y=170..215, x=250..770
crop_row2 = arr[170:215, 250:770]
mask_row2 = np.all(crop_row2 > [170, 160, 150], axis=-1)
r2y, r2x = np.where(mask_row2)
print(f'Row 2 Nav: x=[{250+np.min(r2x)}, {250+np.max(r2x)}] (w={np.max(r2x)-np.min(r2x)+1}), y=[{170+np.min(r2y)}, {170+np.max(r2y)}] (h={np.max(r2y)-np.min(r2y)+1})')

# 5. Social Icons
# Around y=215..265, x=420..600
crop_icons = arr[215:265, 420:600]
mask_icons = np.all(crop_icons > [180, 170, 160], axis=-1)
iy, ix = np.where(mask_icons)
print(f'Social Icons: x=[{420+np.min(ix)}, {420+np.max(ix)}] (w={np.max(ix)-np.min(ix)+1}), y=[{215+np.min(iy)}, {215+np.max(iy)}] (h={np.max(iy)-np.min(iy)+1})')

# 6. Row 3 Legal: PRIVACY | TERMS | RETURNS
# Around y=260..295, x=400..624
crop_row3 = arr[260:295, 400:624]
mask_row3 = np.all(crop_row3 > [160, 150, 140], axis=-1)
r3y, r3x = np.where(mask_row3)
print(f'Legal Row: x=[{400+np.min(r3x)}, {400+np.max(r3x)}] (w={np.max(r3x)-np.min(r3x)+1}), y=[{260+np.min(r3y)}, {260+np.max(r3y)}] (h={np.max(r3y)-np.min(r3y)+1})')

# 7. Copyright: © 2026 BRAND NAME / © 2025 BRAND NAME
# Around y=295..330, x=420..600
crop_copy = arr[295:330, 420:600]
mask_copy = np.all(crop_copy > [150, 140, 130], axis=-1)
cy, cx = np.where(mask_copy)
print(f'Copyright: x=[{420+np.min(cx)}, {420+np.max(cx)}] (w={np.max(cx)-np.min(cx)+1}), y=[{295+np.min(cy)}, {295+np.max(cy)}] (h={np.max(cy)-np.min(cy)+1})')
