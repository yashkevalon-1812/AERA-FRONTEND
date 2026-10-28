from PIL import Image
import numpy as np

def inpaint_text(img_path, box, out_path, is_white_text=True):
    img = Image.open(img_path).convert('RGB')
    arr = np.array(img).astype(float)
    x1, y1, x2, y2 = box
    
    # Expand box slightly
    x1 = max(0, x1 - 3)
    x2 = min(img.width, x2 + 3)
    y1 = max(0, y1 - 3)
    y2 = min(img.height, y2 + 3)
    
    sub = arr[y1:y2, x1:x2]
    
    # Threshold for text pixels
    if is_white_text:
        # bright pixels relative to neighborhood
        mask = np.all(sub > [175, 175, 175], axis=-1)
    else:
        mask = np.all(sub < [100, 100, 100], axis=-1)
    
    # For every pixel in mask, interpolate from top/bottom boundary non-mask pixels
    h_sub, w_sub = mask.shape
    
    for c in range(3):
        channel = sub[:, :, c]
        for x in range(w_sub):
            col_mask = mask[:, x]
            if not np.any(col_mask):
                continue
            
            # Find valid pixels above and below
            top_val = None
            for y in range(h_sub):
                if not mask[y, x]:
                    top_val = (y, channel[y, x])
                else:
                    break
            
            bot_val = None
            for y in range(h_sub - 1, -1, -1):
                if not mask[y, x]:
                    bot_val = (y, channel[y, x])
                else:
                    break
            
            for y in range(h_sub):
                if mask[y, x]:
                    if top_val is not None and bot_val is not None and bot_val[0] > top_val[0]:
                        t = (y - top_val[0]) / (bot_val[0] - top_val[0])
                        val = (1 - t) * top_val[1] + t * bot_val[1]
                    elif top_val is not None:
                        val = top_val[1]
                    elif bot_val is not None:
                        val = bot_val[1]
                    else:
                        val = channel[y, x]
                    
                    # Add subtle sensor noise (+/- 2)
                    noise = (np.random.rand() - 0.5) * 3
                    channel[y, x] = np.clip(val + noise, 0, 255)
        
        sub[:, :, c] = channel
        
    arr[y1:y2, x1:x2] = sub
    clean_img = Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8))
    clean_img.save(out_path, quality=95)
    print(f'Cleaned {out_path}')

# Inpaint all 3 cards
inpaint_text(
    r'C:\Users\divye\Desktop\Kevalon\AERA\AERA-FRONTEND\src\assets\trending-now\everyday-minimal.jpg',
    (48, 131, 233, 145),
    r'C:\Users\divye\Desktop\Kevalon\AERA\AERA-FRONTEND\src\assets\trending-now\everyday-minimal.jpg'
)

inpaint_text(
    r'C:\Users\divye\Desktop\Kevalon\AERA\AERA-FRONTEND\src\assets\trending-now\after-dark.jpg',
    (100, 201, 222, 216),
    r'C:\Users\divye\Desktop\Kevalon\AERA\AERA-FRONTEND\src\assets\trending-now\after-dark.jpg'
)

inpaint_text(
    r'C:\Users\divye\Desktop\Kevalon\AERA\AERA-FRONTEND\src\assets\trending-now\soft-structure.jpg',
    (58, 139, 217, 154),
    r'C:\Users\divye\Desktop\Kevalon\AERA\AERA-FRONTEND\src\assets\trending-now\soft-structure.jpg'
)
