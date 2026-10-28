from PIL import Image
import numpy as np

for name, filename in [('Card 1', 'everyday-minimal.jpg'), ('Card 2', 'after-dark.jpg'), ('Card 3', 'soft-structure.jpg')]:
    img = Image.open(f'C:/Users/divye/Desktop/Kevalon/AERA/AERA-FRONTEND/src/assets/trending-now/{filename}').convert('RGB')
    arr = np.array(img)
    # The overlay text is bright white / off-white: R>200, G>200, B>200
    is_text = np.all(arr > [190, 190, 190], axis=-1)
    y_idx, x_idx = np.where(is_text)
    if len(y_idx) > 0:
        print(f'{name} ({filename}): text bounding box: y=[{np.min(y_idx)}, {np.max(y_idx)}] (h={np.max(y_idx)-np.min(y_idx)+1}), x=[{np.min(x_idx)}, {np.max(x_idx)}] (w={np.max(x_idx)-np.min(x_idx)+1}) on total {img.size}')
        print(f'   Text center: y={np.mean(y_idx):.1f} ({np.mean(y_idx)/img.height*100:.1f}%), x={np.mean(x_idx):.1f} ({np.mean(x_idx)/img.width*100:.1f}%)')
