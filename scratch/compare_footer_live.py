import numpy as np
from PIL import Image

ref_path = r'C:\Users\divye\.gemini\antigravity\brain\a40e8476-2329-48c2-8837-b12cf6408663\raw_footer_ref.png'
live_path = r'C:\Users\divye\.gemini\antigravity\brain\a40e8476-2329-48c2-8837-b12cf6408663\footer_live_1024.png'

ref = Image.open(ref_path).convert('RGB')
live = Image.open(live_path).convert('RGB')

print('Ref size:', ref.size)
print('Live size:', live.size)

w = min(ref.width, live.width)
h = min(ref.height, live.height)

ref_arr = np.array(ref.crop((0, 0, w, h))).astype(float)
live_arr = np.array(live.crop((0, 0, w, h))).astype(float)

diff = np.abs(ref_arr - live_arr)
mae = np.mean(diff)
rmse = np.sqrt(np.mean(diff ** 2))
print(f'Overall MAE: {mae:.2f}')
print(f'Overall RMSE: {rmse:.2f}')

# Region breakdown:
# AERA Wordmark: y=50..95, x=430..590
print('AERA Wordmark MAE:', np.mean(diff[50:95, 430:590]))
# Row 1 Nav: y=115..135, x=260..770
print('Row 1 Nav MAE:', np.mean(diff[115:135, 260:770]))
# Divider line: y=153..161, x=40..830
print('Divider Line MAE:', np.mean(diff[153:161, 40:830]))
# Row 2 Nav: y=180..205, x=260..760
print('Row 2 Nav MAE:', np.mean(diff[180:205, 260:760]))
# Social Icons: y=220..255, x=440..580
print('Social Icons MAE:', np.mean(diff[220:255, 440:580]))
# Legal Row: y=270..290, x=430..595
print('Legal Row MAE:', np.mean(diff[270:290, 430:595]))
# Copyright: y=300..320, x=460..565
print('Copyright MAE:', np.mean(diff[300:320, 460:565]))

# Side-by-side composite
comp = Image.new('RGB', (w, h * 2 + 10), (220, 220, 220))
comp.paste(ref.crop((0, 0, w, h)), (0, 0))
comp.paste(live.crop((0, 0, w, h)), (0, h + 10))
comp_path = r'C:\Users\divye\.gemini\antigravity\brain\a40e8476-2329-48c2-8837-b12cf6408663\footer_side_by_side.png'
comp.save(comp_path)
print(f'Saved side-by-side to {comp_path}')

# Diff heatmap (amplified x3)
diff_vis = Image.fromarray(np.clip(diff * 3, 0, 255).astype(np.uint8))
heatmap_path = r'C:\Users\divye\.gemini\antigravity\brain\a40e8476-2329-48c2-8837-b12cf6408663\footer_diff_heatmap.png'
diff_vis.save(heatmap_path)
print(f'Saved heatmap to {heatmap_path}')
