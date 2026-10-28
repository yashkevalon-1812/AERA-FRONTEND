import numpy as np
from PIL import Image

img = Image.open(r'C:\Users\divye\.gemini\antigravity\brain\a40e8476-2329-48c2-8837-b12cf6408663\.user_uploaded\media_1793191509958_4f3524e7.png').convert('RGB')
arr = np.array(img)
bg = np.array([151, 23, 58])

cards_x = [(65, 211), (237, 376), (403, 622), (649, 795), (822, 961)]

for idx, (x1, x2) in enumerate(cards_x):
    # For this card column, find the top-most and bottom-most non-bg row
    card_patch = arr[:, x1:x2]
    diff = np.max(np.abs(card_patch.astype(int) - bg), axis=-1)
    
    # Non-bg pixels per row
    row_counts = np.sum(diff > 30, axis=1)
    card_rows = np.where(row_counts > 10)[0]
    
    # Filter out top text if any
    # Cards are all below y=130
    card_rows = card_rows[card_rows > 120]
    
    y_top = card_rows[0]
    y_bot = card_rows[-1]
    
    print(f'Card {idx+1}: x=[{x1}, {x2}] (w={x2-x1}), y=[{y_top}, {y_bot}] (h={y_bot - y_top + 1})')

# Crop and save each card image
for idx, (x1, x2) in enumerate(cards_x):
    # crop card with a few pixels padding
    card_img = img.crop((x1, 130, x2, 450))
    card_img.save(f'C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/raw_card_{idx+1}.png')
print('Saved raw card crops!')
