from PIL import Image
import numpy as np

img = Image.open(r'C:\Users\divye\.gemini\antigravity\brain\a40e8476-2329-48c2-8837-b12cf6408663\crop_wear_what_heading.png').convert('L')
arr = np.array(img)

# Print full line 1
for row in arr[3:20, :]:
    line = ''.join(['#' if p > 160 else (' ' if p < 110 else '.') for p in row[::2]])
    print(line)

print('--- LINE 2 (MOVES YOU) ---')
# Print line 2
for row in arr[35:52, :]:
    line = ''.join(['#' if p > 160 else (' ' if p < 110 else '.') for p in row[::2]])
    print(line)
