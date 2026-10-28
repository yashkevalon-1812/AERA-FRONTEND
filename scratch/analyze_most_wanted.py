import numpy as np
from PIL import Image

img = Image.open(r'C:\Users\divye\.gemini\antigravity\brain\a40e8476-2329-48c2-8837-b12cf6408663\.user_uploaded\media_1793191509958_4f3524e7.png').convert('RGB')
w, h = img.size
arr = np.array(img)

# Find burgundy section vertical bounds
# Burgundy color is roughly [151, 23, 58]
is_burgundy_row = []
for y in range(h):
    # check at x=50
    diff = np.max(np.abs(arr[y, 50].astype(int) - np.array([151, 23, 58])))
    if diff < 20:
        is_burgundy_row.append(y)

print(f'Burgundy section: y=[{is_burgundy_row[0]}, {is_burgundy_row[-1]}] (height={is_burgundy_row[-1] - is_burgundy_row[0] + 1})')

# Inspect MOST WANTED text
crop_title = arr[is_burgundy_row[0]:is_burgundy_row[0]+120, 200:824]
title_mask = np.all(crop_title > [160, 160, 180], axis=-1)
y_idx, x_idx = np.where(title_mask)
print(f'MOST WANTED text bounds relative to canvas: y=[{is_burgundy_row[0] + np.min(y_idx)}, {is_burgundy_row[0] + np.max(y_idx)}] (h={np.max(y_idx)-np.min(y_idx)+1}), x=[{200 + np.min(x_idx)}, {200 + np.max(x_idx)}] (w={np.max(x_idx)-np.min(x_idx)+1})')

# Now detect the 5 cards
# Card pixels are NOT burgundy [151, 23, 58]
card_y_sample = 260 # row crossing all 5 cards
is_card_pixel = np.max(np.abs(arr[card_y_sample, :].astype(int) - np.array([151, 23, 58])), axis=-1) > 30

in_card = False
cards = []
start = 0
for x in range(w):
    if is_card_pixel[x] and not in_card:
        in_card = True
        start = x
    elif not is_card_pixel[x] and in_card:
        in_card = False
        cards.append((start, x))
if in_card:
    cards.append((start, w))

print('Detected 5 cards x-spans:', cards)

for idx, (x1, x2) in enumerate(cards):
    # inspect vertical span of this card
    card_cols = arr[:, x1:x2]
    is_card_row = np.mean(np.max(np.abs(card_cols.astype(int) - np.array([151, 23, 58])), axis=-1) > 30, axis=1) > 0.4
    y_indices = np.where(is_card_row)[0]
    if len(y_indices) > 0:
        print(f'Card {idx+1}: x=[{x1}, {x2}] (w={x2-x1}), y=[{y_indices[0]}, {y_indices[-1]}] (h={y_indices[-1]-y_indices[0]+1})')
