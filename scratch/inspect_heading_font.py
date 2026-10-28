from PIL import Image
import numpy as np

img = Image.open(r'C:\Users\divye\.gemini\antigravity\brain\a40e8476-2329-48c2-8837-b12cf6408663\.user_uploaded\media_1793203527885_ecf0643e.png').convert('RGB')
crop = img.crop((550, 115, 775, 175))
crop.save(r'C:\Users\divye\.gemini\antigravity\brain\a40e8476-2329-48c2-8837-b12cf6408663\crop_wear_what_heading.png')

# Print ASCII of 'WEAR'
arr = np.array(crop.convert('L'))
for row in arr[2:18:2, 2:50]:
    line = ''.join(['#' if p > 160 else (' ' if p < 110 else '.') for p in row])
    print(line)
