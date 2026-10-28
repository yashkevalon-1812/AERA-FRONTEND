from PIL import Image
import numpy as np

img = Image.open(r'C:\Users\divye\.gemini\antigravity\brain\a40e8476-2329-48c2-8837-b12cf6408663\.user_uploaded\media_1793191509958_4f3524e7.png').convert('RGBA')
arr = np.array(img)
bg_rgb = np.array([151, 23, 58])

cards_bounds = [
    (65, 145, 212, 412),
    (235, 130, 378, 428),
    (402, 136, 623, 422),
    (647, 145, 796, 412),
    (820, 130, 963, 428)
]

for idx, (x1, y1, x2, y2) in enumerate(cards_bounds):
    patch = arr[y1:y2, x1:x2].copy()
    diff = np.max(np.abs(patch[:, :, :3].astype(int) - bg_rgb), axis=-1)
    
    # Where diff is small (< 25), set alpha to 0 for pure transparent background!
    mask = diff < 25
    # patch[mask, 3] = 0
    
    card_img = Image.fromarray(patch)
    card_img.save(f'C:/Users/divye/Desktop/Kevalon/AERA/AERA-FRONTEND/src/assets/most-wanted/card-{idx+1}.png')

print('Extracted all 5 cards cleanly!')
