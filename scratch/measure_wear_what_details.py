import numpy as np
from PIL import Image

img = Image.open(r'C:\Users\divye\.gemini\antigravity\brain\a40e8476-2329-48c2-8837-b12cf6408663\.user_uploaded\media_1793203527885_ecf0643e.png').convert('RGB')
arr = np.array(img)
H, W, _ = arr.shape
print(f'Canvas size: {W} x {H}')

# Background color of outer canvas:
bg_samples = [arr[5, 5], arr[5, W//2], arr[H-5, 5], arr[H-5, W//2]]
print('Canvas BG sample:', np.mean(bg_samples, axis=0))

# Find the container: pixels differing from outer BG
outer_bg = np.array([248, 245, 230])
diff_from_bg = np.linalg.norm(arr.astype(float) - outer_bg, axis=-1)
is_container = diff_from_bg > 10.0

y_indices, x_indices = np.where(is_container)
c_x0, c_x1 = np.min(x_indices), np.max(x_indices)
c_y0, c_y1 = np.min(y_indices), np.max(y_indices)
c_w = c_x1 - c_x0 + 1
c_h = c_y1 - c_y0 + 1

print(f'Container bounds: x=[{c_x0}, {c_x1}] (w={c_w}), y=[{c_y0}, {c_y1}] (h={c_h})')
print(f'Top padding: {c_y0}px, Bottom padding: {H - 1 - c_y1}px')
print(f'Left padding: {c_x0}px, Right padding: {W - 1 - c_x1}px')
print(f'Container aspect ratio: {c_w} / {c_h} = {c_w / c_h:.4f}')

# Inspect Corner Radius:
# Look at corner (c_x0, c_y0)
corner_crop = arr[c_y0:c_y0+30, c_x0:c_x0+30]
# Where does it start being container?
# Print first non-bg pixel in each row of top-left corner
radii = []
for r in range(25):
    row_diff = np.linalg.norm(corner_crop[r, :].astype(float) - outer_bg, axis=-1)
    first_c = np.where(row_diff > 10.0)[0]
    if len(first_c) > 0:
        radii.append((r, first_c[0]))
print('Corner radius profile (top-left row -> first container col):', radii[:15])

# Heading: "WEAR WHAT / MOVES YOU"
# Inside container:
crop_heading = arr[90:200, 500:800]
h_mask = np.all(crop_heading > [180, 180, 180], axis=-1)
hy, hx = np.where(h_mask)
h_x0, h_x1 = 500 + np.min(hx), 500 + np.max(hx)
h_y0, h_y1 = 90 + np.min(hy), 90 + np.max(hy)
print(f'Heading: x=[{h_x0}, {h_x1}] (w={h_x1 - h_x0 + 1}), y=[{h_y0}, {h_y1}] (h={h_y1 - h_y0 + 1})')
print(f'Heading rel container: x_left_pct={(h_x0 - c_x0) / c_w * 100:.2f}%, y_top_pct={(h_y0 - c_y0) / c_h * 100:.2f}%')

# Line 1: "WEAR WHAT"
# Line 2: "MOVES YOU"
# Let's find vertical split between line 1 and line 2
line1_mask = crop_heading[:55, :]
line2_mask = crop_heading[55:, :]
h1_y, _ = np.where(np.all(line1_mask > [180, 180, 180], axis=-1))
h2_y, _ = np.where(np.all(line2_mask > [180, 180, 180], axis=-1))
print(f'Heading Line 1 height: {np.max(h1_y) - np.min(h1_y) + 1}px, y0={90 + np.min(h1_y)}')
print(f'Heading Line 2 height: {np.max(h2_y) - np.min(h2_y) + 1}px, y0={90 + 55 + np.min(h2_y)}')
print(f'Heading gap between lines: {55 + np.min(h2_y) - np.max(h1_y)}px')

# Subtitle:
crop_sub = arr[190:240, 80:400]
s_mask = np.all(crop_sub > [170, 170, 170], axis=-1)
sy, sx = np.where(s_mask)
s_x0, s_x1 = 80 + np.min(sx), 80 + np.max(sx)
s_y0, s_y1 = 190 + np.min(sy), 190 + np.max(sy)
print(f'Subtitle: x=[{s_x0}, {s_x1}] (w={s_x1 - s_x0 + 1}), y=[{s_y0}, {s_y1}] (h={s_y1 - s_y0 + 1})')
print(f'Subtitle rel container: x_left_pct={(s_x0 - c_x0) / c_w * 100:.2f}%, y_top_pct={(s_y0 - c_y0) / c_h * 100:.2f}%')

# Button:
crop_btn = arr[240:290, 80:260]
b_mask = np.all(crop_btn > [220, 210, 200], axis=-1)
by, bx = np.where(b_mask)
b_x0, b_x1 = 80 + np.min(bx), 80 + np.max(bx)
b_y0, b_y1 = 240 + np.min(by), 240 + np.max(by)
print(f'Button: x=[{b_x0}, {b_x1}] (w={b_x1 - b_x0 + 1}), y=[{b_y0}, {b_y1}] (h={b_y1 - b_y0 + 1})')
print(f'Button rel container: x_left_pct={(b_x0 - c_x0) / c_w * 100:.2f}%, y_top_pct={(b_y0 - c_y0) / c_h * 100:.2f}%')
print(f'Button bottom margin rel container: {c_y1 - b_y1}px ({(c_y1 - b_y1)/c_h * 100:.2f}%)')
