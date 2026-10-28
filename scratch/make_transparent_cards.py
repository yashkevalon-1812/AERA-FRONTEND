from PIL import Image
import numpy as np

bg_rgb = np.array([151, 23, 58])

for idx in range(1, 6):
    img = Image.open(f'C:/Users/divye/Desktop/Kevalon/AERA/AERA-FRONTEND/src/assets/most-wanted/card-{idx}.png').convert('RGBA')
    arr = np.array(img).astype(float)
    
    # Color distance from burgundy background
    dist = np.sqrt(np.sum((arr[:, :, :3] - bg_rgb)**2, axis=-1))
    
    # If dist < 15, alpha = 0
    # If dist between 15 and 35, smooth alpha transition
    # If dist > 35, alpha = 255
    alpha = np.clip((dist - 12) / (32 - 12) * 255, 0, 255)
    
    arr[:, :, 3] = alpha
    
    clean_card = Image.fromarray(arr.astype(np.uint8))
    clean_card.save(f'C:/Users/divye/Desktop/Kevalon/AERA/AERA-FRONTEND/src/assets/most-wanted/card-{idx}.png')
    print(f'Processed card-{idx}.png with smooth alpha blending')
