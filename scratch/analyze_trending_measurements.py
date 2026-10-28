import numpy as np
from PIL import Image

img = Image.open(r'C:\Users\divye\.gemini\antigravity\brain\a40e8476-2329-48c2-8837-b12cf6408663\.user_uploaded\media_1793190663373_4a8678e1.png').convert('RGB')
w, h = img.size
arr = np.array(img)
bg = np.array([248, 245, 230])

# Column 1 photo card:
# Look at x from 43 to 325, find where the photo begins
col1_photo_y = []
for y in range(h):
    # Check if a row from x=45 to 320 is predominantly photo (diff from bg)
    diffs = np.max(np.abs(arr[y, 45:320].astype(int) - bg.astype(int)), axis=-1)
    if np.sum(diffs > 20) > 200: # wide solid block
        col1_photo_y.append(y)

print('Col 1 photo y range:', col1_photo_y[0], 'to', col1_photo_y[-1], 'height =', col1_photo_y[-1] - col1_photo_y[0])

# Column 2 photo card:
col2_photo_y = []
for y in range(h):
    diffs = np.max(np.abs(arr[y, 355:670].astype(int) - bg.astype(int)), axis=-1)
    if np.sum(diffs > 20) > 250:
        col2_photo_y.append(y)

print('Col 2 photo y range:', col2_photo_y[0], 'to', col2_photo_y[-1], 'height =', col2_photo_y[-1] - col2_photo_y[0])

# Column 3 photo card:
col3_photo_y = []
for y in range(h):
    diffs = np.max(np.abs(arr[y, 705:980].astype(int) - bg.astype(int)), axis=-1)
    if np.sum(diffs > 20) > 200:
        col3_photo_y.append(y)

print('Col 3 photo y range:', col3_photo_y[0], 'to', col3_photo_y[-1], 'height =', col3_photo_y[-1] - col3_photo_y[0])

# Now check margins
print('Top margin for col 2 photo:', col2_photo_y[0])
print('Bottom margin for col 2 photo:', h - col2_photo_y[-1])
print('Left margin:', 43)
print('Right margin:', 1024 - 983)
print('Gap between col 1 and col 2:', 351 - 325)
print('Gap between col 2 and col 3:', 701 - 674)
