import numpy as np
from PIL import Image

# Open the raw reference image
img = Image.open('C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/raw_footer_ref.png').convert('RGB')
arr = np.array(img).astype(float)
H, W, _ = arr.shape
print(f'Canvas size: {W} x {H}')

# We will detect light text pixels in specific known element boxes
# 1. AERA Wordmark: y=50..95, x=435..590
# 2. Row 1: y=115..132, x=270..770
# 3. Divider line: y=154..160, x=40..825
# 4. Row 2: y=184..200, x=275..750
# 5. Social icons: y=223..250, x=450..575
# 6. Legal row: y=275..287, x=435..590
# 7. Copyright: y=303..316, x=465..560

boxes = [
    # (y0, y1, x0, x1, threshold)
    (50, 95, 435, 590, 150),   # AERA
    (115, 132, 270, 770, 135), # Row 1
    (155, 159, 40, 825, 115),  # Divider line
    (184, 200, 275, 750, 135), # Row 2
    (223, 250, 450, 575, 140), # Social icons
    (275, 287, 435, 590, 125), # Legal row
    (303, 316, 465, 560, 120), # Copyright
]

for y0, y1, x0, x1, thresh in boxes:
    sub = arr[y0:y1, x0:x1].copy()
    # Mask of text / line pixels
    # Background in this image is generally dark (mean R around 97, G 82, B 73)
    # Text pixels have brightness > thresh
    mask = np.mean(sub, axis=-1) > thresh
    
    # Dilate mask by 1px in all directions
    mask_dilated = mask.copy()
    for dy in [-1, 0, 1]:
        for dx in [-1, 0, 1]:
            mask_dilated |= np.roll(np.roll(mask, dy, axis=0), dx, axis=1)
            
    h_box, w_box = mask_dilated.shape
    for c in range(3):
        chan = sub[:, :, c]
        for x in range(w_box):
            for y in range(h_box):
                if mask_dilated[y, x]:
                    # Interpolate vertically from top and bottom non-masked pixels
                    top_y = max(0, y - 6)
                    while top_y < y and mask_dilated[top_y, x]:
                        top_y += 1
                    bot_y = min(h_box - 1, y + 6)
                    while bot_y > y and mask_dilated[bot_y, x]:
                        bot_y -= 1
                        
                    if not mask_dilated[top_y, x] and not mask_dilated[bot_y, x] and bot_y > top_y:
                        t = (y - top_y) / (bot_y - top_y)
                        val = (1 - t) * chan[top_y, x] + t * chan[bot_y, x]
                    elif not mask_dilated[top_y, x]:
                        val = chan[top_y, x]
                    elif not mask_dilated[bot_y, x]:
                        val = chan[bot_y, x]
                    else:
                        val = np.median(chan[~mask_dilated]) if np.any(~mask_dilated) else 90.0
                    noise = (np.random.rand() - 0.5) * 1.5
                    chan[y, x] = np.clip(val + noise, 0, 255)
        sub[:, :, c] = chan
    arr[y0:y1, x0:x1] = sub

clean_img = Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8))
clean_img.save('C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/clean_footer_bg.png')
print('Successfully saved clean_footer_bg.png!')
