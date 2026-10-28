import numpy as np
from PIL import Image

img = Image.open(r'C:\Users\divye\.gemini\antigravity\brain\a40e8476-2329-48c2-8837-b12cf6408663\.user_uploaded\media_1793190663373_4a8678e1.png').convert('RGB')
arr = np.array(img)
bg = np.array([248, 245, 230])

# Column 2 exact y:
col2_start, col2_end = None, None
for y in range(img.height):
    is_photo = np.sum(np.max(np.abs(arr[y, 355:670].astype(int) - bg.astype(int)), axis=-1) > 20) > 280
    if is_photo and col2_start is None:
        col2_start = y
    if is_photo:
        col2_end = y

print(f'Column 2 photo: x=[351, 674] (w=323), y=[{col2_start}, {col2_end}] (h={col2_end - col2_start + 1})')

# Column 3 photo exact y:
col3_start, col3_end = None, None
for y in range(img.height):
    is_photo = np.sum(np.max(np.abs(arr[y, 705:980].astype(int) - bg.astype(int)), axis=-1) > 20) > 240
    if is_photo and col3_start is None:
        col3_start = y
    if is_photo:
        col3_end = y

print(f'Column 3 photo: x=[701, 983] (w=282), y=[{col3_start}, {col3_end}] (h={col3_end - col3_start + 1})')

# Column 3 description text:
# y from col3_end to bottom
for y in range(col3_end + 1, img.height, 2):
    diffs = np.max(np.abs(arr[y, 701:983].astype(int) - bg.astype(int)), axis=-1)
    dark_cnt = np.sum(diffs > 20)
    if dark_cnt > 0:
        print(f'Desc text row y={y}: dark_pixels={dark_cnt}')
