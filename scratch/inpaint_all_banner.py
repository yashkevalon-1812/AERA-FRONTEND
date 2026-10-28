import numpy as np
from PIL import Image

# Load the raw container crop from reference
img = Image.open(r'C:\Users\divye\.gemini\antigravity\brain\a40e8476-2329-48c2-8837-b12cf6408663\raw_wear_what_moves_you.png').convert('RGB')
arr = np.array(img).astype(float)
h_total, w_total, _ = arr.shape
print(f'Container size: {w_total}x{h_total}')

# 1. Inpaint Big Heading "WEAR WHAT MOVES YOU" (x: 480 to 760, y: 65 to 150)
sub_h = arr[65:150, 480:760].copy()
mask_h = np.all(sub_h > [155, 155, 155], axis=-1)
h_box, w_box = mask_h.shape
for c in range(3):
    channel = sub_h[:, :, c]
    for x in range(w_box):
        for y in range(h_box):
            if mask_h[y, x]:
                top_y, bot_y = 0, h_box - 1
                while top_y < y and mask_h[top_y, x]:
                    top_y += 1
                while bot_y > y and mask_h[bot_y, x]:
                    bot_y -= 1
                if not mask_h[top_y, x] and not mask_h[bot_y, x] and bot_y > top_y:
                    t = (y - top_y) / (bot_y - top_y)
                    val = (1 - t) * channel[top_y, x] + t * channel[bot_y, x]
                else:
                    val = channel[0, x]
                noise = (np.random.rand() - 0.5) * 2.0
                channel[y, x] = np.clip(val + noise, 0, 255)
    sub_h[:, :, c] = channel
arr[65:150, 480:760] = sub_h

# 2. Inpaint Subtitle text: x: 45 to 300, y: 160 to 200
# The subtitle text is white over dark brown sweater
sub_s = arr[160:200, 45:300].copy()
mask_s = np.all(sub_s > [120, 100, 90], axis=-1)
# dilate mask slightly (1px)
mask_s_dilated = mask_s.copy()
for dy in [-1, 0, 1]:
    for dx in [-1, 0, 1]:
        mask_s_dilated |= np.roll(np.roll(mask_s, dy, axis=0), dx, axis=1)

hs_box, ws_box = mask_s_dilated.shape
for c in range(3):
    chan = sub_s[:, :, c]
    for x in range(ws_box):
        for y in range(hs_box):
            if mask_s_dilated[y, x]:
                # Sample from nearby non-masked pixels vertically
                top_y = max(0, y - 8)
                while top_y < y and mask_s_dilated[top_y, x]:
                    top_y += 1
                bot_y = min(hs_box - 1, y + 8)
                while bot_y > y and mask_s_dilated[bot_y, x]:
                    bot_y -= 1
                if not mask_s_dilated[top_y, x] and not mask_s_dilated[bot_y, x] and bot_y > top_y:
                    t = (y - top_y) / (bot_y - top_y)
                    val = (1 - t) * chan[top_y, x] + t * chan[bot_y, x]
                elif not mask_s_dilated[top_y, x]:
                    val = chan[top_y, x]
                elif not mask_s_dilated[bot_y, x]:
                    val = chan[bot_y, x]
                else:
                    # fallback to general sweater tone
                    val = np.median(chan[~mask_s_dilated])
                noise = (np.random.rand() - 0.5) * 3.0
                chan[y, x] = np.clip(val + noise, 0, 255)
    sub_s[:, :, c] = chan
arr[160:200, 45:300] = sub_s

# 3. Inpaint Button: x: 48 to 202, y: 202 to 240
# Button is cream background [220..250, 215..245, 205..235] and text inside
sub_b = arr[200:242, 45:205].copy()
mask_b = np.all(sub_b > [100, 80, 70], axis=-1)
# dilate mask slightly
mask_b_dilated = mask_b.copy()
for dy in [-2, -1, 0, 1, 2]:
    for dx in [-2, -1, 0, 1, 2]:
        mask_b_dilated |= np.roll(np.roll(mask_b, dy, axis=0), dx, axis=1)

hb_box, wb_box = mask_b_dilated.shape
for c in range(3):
    chan = sub_b[:, :, c]
    for x in range(wb_box):
        for y in range(hb_box):
            if mask_b_dilated[y, x]:
                # Top pixels (y=0..5) are clean sweater
                # Bottom pixels (y=hb_box-5..hb_box-1) are clean sweater
                top_y = 0
                while top_y < y and mask_b_dilated[top_y, x]:
                    top_y += 1
                bot_y = hb_box - 1
                while bot_y > y and mask_b_dilated[bot_y, x]:
                    bot_y -= 1
                if not mask_b_dilated[top_y, x] and not mask_b_dilated[bot_y, x] and bot_y > top_y:
                    t = (y - top_y) / (bot_y - top_y)
                    val = (1 - t) * chan[top_y, x] + t * chan[bot_y, x]
                elif not mask_b_dilated[top_y, x]:
                    val = chan[top_y, x]
                elif not mask_b_dilated[bot_y, x]:
                    val = chan[bot_y, x]
                else:
                    val = np.median(chan[~mask_b_dilated])
                noise = (np.random.rand() - 0.5) * 3.0
                chan[y, x] = np.clip(val + noise, 0, 255)
    sub_b[:, :, c] = chan
arr[200:242, 45:205] = sub_b

clean_img = Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8))
clean_img.save(r'C:\Users\divye\Desktop\Kevalon\AERA\AERA-FRONTEND\src\assets\wear-what\wear-what-banner.jpg', quality=98)
clean_img.save(r'C:\Users\divye\.gemini\antigravity\brain\a40e8476-2329-48c2-8837-b12cf6408663\clean_banner_test.png')
print('Successfully saved clean banner image with all elements removed!')
