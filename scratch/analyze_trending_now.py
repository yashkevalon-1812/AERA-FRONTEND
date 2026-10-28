import numpy as np
from PIL import Image

img = Image.open(r'C:\Users\divye\.gemini\antigravity\brain\a40e8476-2329-48c2-8837-b12cf6408663\.user_uploaded\media_1793190663373_4a8678e1.png').convert('RGB')
w, h = img.size
print('Reference size:', w, h)

arr = np.array(img)

# Detect boundaries of the 3 photo cards
# Non-background pixels are not close to [248, 245, 230]
bg = np.array([248, 245, 230])
diff = np.max(np.abs(arr.astype(int) - bg.astype(int)), axis=-1)
is_content = diff > 20

# Horizontal profile of non-bg pixels
h_profile = np.sum(is_content, axis=0)
# Find card intervals
in_card = False
cards_x = []
start = 0
for x in range(w):
    # look at y from 100 to 400
    col_content = np.sum(is_content[100:400, x])
    if col_content > 50 and not in_card:
        in_card = True
        start = x
    elif col_content <= 50 and in_card:
        in_card = False
        cards_x.append((start, x))
if in_card:
    cards_x.append((start, w))

print('Detected cards x intervals:', cards_x)

for idx, (x1, x2) in enumerate(cards_x):
    # Find vertical boundaries for this card
    v_content = np.sum(is_content[:, x1:x2], axis=1)
    y_indices = np.where(v_content > (x2 - x1) * 0.5)[0]
    if len(y_indices) > 0:
        y1, y2 = y_indices[0], y_indices[-1]
        print(f'Card {idx+1}: x=[{x1}, {x2}] (width={x2-x1}), y=[{y1}, {y2}] (height={y2-y1}), aspect={round((x2-x1)/(y2-y1), 3)}')
