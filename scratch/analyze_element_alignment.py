import numpy as np
from PIL import Image

ref = Image.open(r'C:\Users\divye\.gemini\antigravity\brain\a40e8476-2329-48c2-8837-b12cf6408663\.user_uploaded\media_1793203527885_ecf0643e.png').convert('RGB')
live = Image.open(r'C:\Users\divye\.gemini\antigravity\brain\a40e8476-2329-48c2-8837-b12cf6408663\wear_what_live_1024.png').convert('RGB')

ref_arr = np.array(ref)
live_arr = np.array(live)

# 1. Heading Crop Comparison
# Heading is around x=540..780, y=105..180
ref_h = ref_arr[105:180, 540:780]
live_h = live_arr[105:180, 540:780]

# Where is text in ref vs live?
h_ref_mask = np.all(ref_h > [180, 180, 180], axis=-1)
h_live_mask = np.all(live_h > [180, 180, 180], axis=-1)

ref_hy, ref_hx = np.where(h_ref_mask)
live_hy, live_hx = np.where(h_live_mask)

print('Heading Ref: x=[%d, %d] (w=%d), y=[%d, %d] (h=%d)' % (
    540 + np.min(ref_hx), 540 + np.max(ref_hx), np.max(ref_hx) - np.min(ref_hx) + 1,
    105 + np.min(ref_hy), 105 + np.max(ref_hy), np.max(ref_hy) - np.min(ref_hy) + 1
))
print('Heading Live: x=[%d, %d] (w=%d), y=[%d, %d] (h=%d)' % (
    540 + np.min(live_hx), 540 + np.max(live_hx), np.max(live_hx) - np.min(live_hx) + 1,
    105 + np.min(live_hy), 105 + np.max(live_hy), np.max(live_hy) - np.min(live_hy) + 1
))

# 2. Subtitle Crop Comparison
# Subtitle is around x=90..360, y=200..245
ref_s = ref_arr[200:245, 90:360]
live_s = live_arr[200:245, 90:360]
s_ref_mask = np.all(ref_s > [170, 170, 170], axis=-1)
s_live_mask = np.all(live_s > [170, 170, 170], axis=-1)

ref_sy, ref_sx = np.where(s_ref_mask)
live_sy, live_sx = np.where(s_live_mask)

print('Subtitle Ref: x=[%d, %d] (w=%d), y=[%d, %d] (h=%d)' % (
    90 + np.min(ref_sx), 90 + np.max(ref_sx), np.max(ref_sx) - np.min(ref_sx) + 1,
    200 + np.min(ref_sy), 200 + np.max(ref_sy), np.max(ref_sy) - np.min(ref_sy) + 1
))
print('Subtitle Live: x=[%d, %d] (w=%d), y=[%d, %d] (h=%d)' % (
    90 + np.min(live_sx), 90 + np.max(live_sx), np.max(live_sx) - np.min(live_sx) + 1,
    200 + np.min(live_sy), 200 + np.max(live_sy), np.max(live_sy) - np.min(live_sy) + 1
))

# 3. Button Crop Comparison
# Button is around x=90..260, y=240..285
ref_b = ref_arr[240:285, 90:260]
live_b = live_arr[240:285, 90:260]
b_ref_mask = np.all(ref_b > [220, 210, 200], axis=-1)
b_live_mask = np.all(live_b > [220, 210, 200], axis=-1)

ref_by, ref_bx = np.where(b_ref_mask)
live_by, live_bx = np.where(b_live_mask)

print('Button Ref: x=[%d, %d] (w=%d), y=[%d, %d] (h=%d)' % (
    90 + np.min(ref_bx), 90 + np.max(ref_bx), np.max(ref_bx) - np.min(ref_bx) + 1,
    240 + np.min(ref_by), 240 + np.max(ref_by), np.max(ref_by) - np.min(ref_by) + 1
))
print('Button Live: x=[%d, %d] (w=%d), y=[%d, %d] (h=%d)' % (
    90 + np.min(live_bx), 90 + np.max(live_bx), np.max(live_bx) - np.min(live_bx) + 1,
    240 + np.min(live_by), 240 + np.max(live_by), np.max(live_by) - np.min(live_by) + 1
))

# Save zoomed comparisons
def save_zoom(ref_sub, live_sub, name):
    h, w, _ = ref_sub.shape
    comp = Image.new('RGB', (w * 2 + 10, h))
    comp.paste(Image.fromarray(ref_sub), (0, 0))
    comp.paste(Image.fromarray(live_sub), (w + 10, 0))
    comp.resize(((w * 2 + 10) * 3, h * 3), Image.Resampling.NEAREST).save(f'C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/zoom_{name}.png')

save_zoom(ref_h, live_h, 'heading')
save_zoom(ref_s, live_s, 'subtitle')
save_zoom(ref_b, live_b, 'button')
print('Saved zoom comparisons!')
