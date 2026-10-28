import numpy as np
from PIL import Image

ref_path = r'C:\Users\divye\.gemini\antigravity\brain\a40e8476-2329-48c2-8837-b12cf6408663\.user_uploaded\media_1793203527885_ecf0643e.png'
live_path = r'C:\Users\divye\.gemini\antigravity\brain\a40e8476-2329-48c2-8837-b12cf6408663\wear_what_live_1024.png'

ref_img = Image.open(ref_path).convert('RGB')
live_img = Image.open(live_path).convert('RGB')

print('Ref size:', ref_img.size)
print('Live size:', live_img.size)

# Crop or resize if there's any 1px mismatch
w = min(ref_img.width, live_img.width)
h = min(ref_img.height, live_img.height)

ref_arr = np.array(ref_img.crop((0, 0, w, h))).astype(float)
live_arr = np.array(live_img.crop((0, 0, w, h))).astype(float)

diff = np.abs(ref_arr - live_arr)
mae = np.mean(diff)
rmse = np.sqrt(np.mean(diff ** 2))
print(f'Overall MAE: {mae:.2f}')
print(f'Overall RMSE: {rmse:.2f}')

# Measure Heading region diff: x=500..800, y=90..190
diff_h = diff[90:190, 500:800]
print(f'Heading region MAE: {np.mean(diff_h):.2f}')

# Measure Subtitle region diff: x=80..380, y=190..245
diff_s = diff[190:245, 80:380]
print(f'Subtitle region MAE: {np.mean(diff_s):.2f}')

# Measure Button region diff: x=80..280, y=240..290
diff_b = diff[240:290, 80:280]
print(f'Button region MAE: {np.mean(diff_b):.2f}')

# Side-by-side composite
composite = Image.new('RGB', (w, h * 2 + 10), (230, 230, 230))
composite.paste(ref_img.crop((0, 0, w, h)), (0, 0))
composite.paste(live_img.crop((0, 0, w, h)), (0, h + 10))
comp_path = r'C:\Users\divye\.gemini\antigravity\brain\a40e8476-2329-48c2-8837-b12cf6408663\wear_what_side_by_side.png'
composite.save(comp_path)
print(f'Saved side-by-side comparison to {comp_path}')

# Diff heatmap (amplified x3)
diff_vis = Image.fromarray(np.clip(diff * 3, 0, 255).astype(np.uint8))
diff_vis_path = r'C:\Users\divye\.gemini\antigravity\brain\a40e8476-2329-48c2-8837-b12cf6408663\wear_what_diff_heatmap.png'
diff_vis.save(diff_vis_path)
print(f'Saved diff heatmap to {diff_vis_path}')
