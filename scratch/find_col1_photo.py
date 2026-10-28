import numpy as np
from PIL import Image

img = Image.open(r'C:\Users\divye\.gemini\antigravity\brain\a40e8476-2329-48c2-8837-b12cf6408663\.user_uploaded\media_1793190663373_4a8678e1.png').convert('RGB')
arr = np.array(img)
bg = np.array([248, 245, 230])

# Column 1: x from 43 to 325
# Let's inspect rows from 0 to 300 to find the exact gap between TRENDING NOW and the photo
for y in range(0, 300, 5):
    row_diff = np.max(np.abs(arr[y, 43:325].astype(int) - bg.astype(int)), axis=-1)
    # Mean color
    mean_rgb = np.mean(arr[y, 43:325], axis=0)
    non_bg_count = np.sum(row_diff > 20)
    print(f'y={y}: non_bg={non_bg_count}, mean_rgb={np.round(mean_rgb, 1)}')
