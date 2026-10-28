import numpy as np
from PIL import Image

img = Image.open(r'C:\Users\divye\.gemini\antigravity\brain\a40e8476-2329-48c2-8837-b12cf6408663\.user_uploaded\media_1793191509958_4f3524e7.png').convert('RGB')
arr = np.array(img)
bg = np.array([151, 23, 58])

cards_x = [(65, 211), (237, 376), (403, 622), (649, 795), (822, 961)]

for idx, (x1, x2) in enumerate(cards_x):
    # Find card pixels between y=120 and y=468
    patch = arr[120:468, x1:x2]
    # mask of card pixels (not burgundy)
    diff = np.max(np.abs(patch.astype(int) - bg), axis=-1)
    is_card = diff > 30
    
    y_idx, x_idx = np.where(is_card)
    y_top = 120 + np.min(y_idx)
    y_bot = 120 + np.max(y_idx)
    x_left = x1 + np.min(x_idx)
    x_right = x1 + np.max(x_idx)
    
    # Check top-left, top-right, bottom-left, bottom-right corners
    # to see if there is rotation/skew
    print(f'Card {idx+1}: bounds x=[{x_left}, {x_right}] (w={x_right-x_left+1}), y=[{y_top}, {y_bot}] (h={y_bot-y_top+1})')
    
    # Left edge y range:
    left_y = np.where(is_card[:, 0])[0]
    right_y = np.where(is_card[:, -1])[0]
    if len(left_y) > 0 and len(right_y) > 0:
        print(f'   Left edge y=[{120+left_y[0]}, {120+left_y[-1]}], Right edge y=[{120+right_y[0]}, {120+right_y[-1]}]')
        dy = (120+left_y[0]) - (120+right_y[0])
        print(f'   Top tilt: left - right = {dy}px')
