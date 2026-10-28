import numpy as np
from PIL import Image

img = Image.open('C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/raw_footer_ref.png').convert('RGB')
arr = np.array(img)
H, W, _ = arr.shape
print(f'Dimensions: {W} x {H}')

# 1. Inspect "AERA" Wordmark
# x=446..579, y=57..88
crop_aera = arr[50:95, 440:585]
mask_aera = np.all(crop_aera > [180, 170, 160], axis=-1)
ay, ax = np.where(mask_aera)
print(f'AERA Wordmark: x=[{440+np.min(ax)}, {440+np.max(ax)}] (w={np.max(ax)-np.min(ax)+1}), y=[{50+np.min(ay)}, {50+np.max(ay)}] (h={np.max(ay)-np.min(ay)+1})')
# Mean color of AERA wordmark
print('AERA text color:', np.mean(crop_aera[mask_aera], axis=0).astype(int))

# 2. Inspect Row 1 Nav:
# NEW COLLECTIONS | EVERYDAY ESSENTIALS | MODERN CLASSICS
# Let's find each link's box
crop_r1 = arr[115:135, :]
# Look between x=250 and 800
r1_mask = np.all(crop_r1 > [160, 150, 140], axis=-1)
# Find column ranges
cols_with_text = np.where(np.any(r1_mask, axis=0))[0]
print(f'Row 1 overall cols: [{np.min(cols_with_text)}, {np.max(cols_with_text)}]')

# Find gaps in cols_with_text to separate the 3 items
items = []
current = [cols_with_text[0]]
for i in range(1, len(cols_with_text)):
    if cols_with_text[i] - cols_with_text[i-1] > 10:
        items.append((current[0], current[-1]))
        current = [cols_with_text[i]]
    else:
        current.append(cols_with_text[i])
items.append((current[0], current[-1]))

print('Row 1 items:')
for idx, (x0, x1) in enumerate(items):
    sub = arr[115:135, x0:x1+1]
    sy, _ = np.where(np.all(sub > [160, 150, 140], axis=-1))
    print(f'  Item {idx+1}: x=[{x0}, {x1}] (w={x1-x0+1}), y=[{115+np.min(sy)}, {115+np.max(sy)}] (h={np.max(sy)-np.min(sy)+1})')

# 3. Inspect Divider Line
# y around 155..160
for y in range(150, 165):
    row = arr[y, :, :]
    # Line is lighter than background [97, 82, 73]
    light_px = np.where(row[:, 0] > 115)[0]
    if len(light_px) > 200:
        print(f'Divider line at y={y}: x=[{np.min(light_px)}, {np.max(light_px)}] (w={np.max(light_px)-np.min(light_px)+1}), mean color={np.mean(row[light_px], axis=0).astype(int)}')

# 4. Inspect Row 2 Nav:
# ABOUT | HELP | CONTACT | COLLECTION | SHOP GUIDE
crop_r2 = arr[180:205, :]
r2_mask = np.all(crop_r2 > [160, 150, 140], axis=-1)
cols_r2 = np.where(np.any(r2_mask, axis=0))[0]
items2 = []
current2 = [cols_r2[0]]
for i in range(1, len(cols_r2)):
    if cols_r2[i] - cols_r2[i-1] > 10:
        items2.append((current2[0], current2[-1]))
        current2 = [cols_r2[i]]
    else:
        current2.append(cols_r2[i])
items2.append((current2[0], current2[-1]))

print('Row 2 items:')
for idx, (x0, x1) in enumerate(items2):
    sub = arr[180:205, x0:x1+1]
    sy, _ = np.where(np.all(sub > [160, 150, 140], axis=-1))
    print(f'  Item {idx+1}: x=[{x0}, {x1}] (w={x1-x0+1}), y=[{180+np.min(sy)}, {180+np.max(sy)}] (h={np.max(sy)-np.min(sy)+1})')

# 5. Inspect Social Icons:
# Pinterest | Instagram | Facebook
crop_soc = arr[225:255, :]
soc_mask = np.all(crop_soc > [170, 160, 150], axis=-1)
cols_soc = np.where(np.any(soc_mask, axis=0))[0]
items_soc = []
cur_soc = [cols_soc[0]]
for i in range(1, len(cols_soc)):
    if cols_soc[i] - cols_soc[i-1] > 8:
        items_soc.append((cur_soc[0], cur_soc[-1]))
        cur_soc = [cols_soc[i]]
    else:
        cur_soc.append(cols_soc[i])
items_soc.append((cur_soc[0], cur_soc[-1]))

print('Social Icons:')
for idx, (x0, x1) in enumerate(items_soc):
    sub = arr[225:255, x0:x1+1]
    sy, _ = np.where(np.all(sub > [170, 160, 150], axis=-1))
    print(f'  Icon {idx+1}: x=[{x0}, {x1}] (w={x1-x0+1}), y=[{225+np.min(sy)}, {225+np.max(sy)}] (h={np.max(sy)-np.min(sy)+1})')

# 6. Inspect Legal Row: PRIVACY | TERMS | RETURNS
crop_leg = arr[275:290, :]
leg_mask = np.all(crop_leg > [140, 130, 120], axis=-1)
cols_leg = np.where(np.any(leg_mask, axis=0))[0]
items_leg = []
cur_leg = [cols_leg[0]]
for i in range(1, len(cols_leg)):
    if cols_leg[i] - cols_leg[i-1] > 8:
        items_leg.append((cur_leg[0], cur_leg[-1]))
        cur_leg = [cols_leg[i]]
    else:
        cur_leg.append(cols_leg[i])
items_leg.append((cur_leg[0], cur_leg[-1]))

print('Legal items:')
for idx, (x0, x1) in enumerate(items_leg):
    sub = arr[275:290, x0:x1+1]
    sy, _ = np.where(np.all(sub > [140, 130, 120], axis=-1))
    print(f'  Legal {idx+1}: x=[{x0}, {x1}] (w={x1-x0+1}), y=[{275+np.min(sy)}, {275+np.max(sy)}] (h={np.max(sy)-np.min(sy)+1})')

# 7. Copyright:
crop_c = arr[300:320, :]
c_mask = np.all(crop_c > [140, 130, 120], axis=-1)
cy, cx = np.where(c_mask)
print(f'Copyright: x=[{np.min(cx)}, {np.max(cx)}] (w={np.max(cx)-np.min(cx)+1}), y=[{300+np.min(cy)}, {300+np.max(cy)}] (h={np.max(cy)-np.min(cy)+1})')
