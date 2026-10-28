from PIL import Image
import numpy as np

img = Image.open(r'C:\Users\divye\.gemini\antigravity\brain\a40e8476-2329-48c2-8837-b12cf6408663\raw_wear_what_moves_you.png').convert('RGB')
arr = np.array(img).astype(float)

# Inpaint "WEAR WHAT MOVES YOU" at x=500..730, y=70..135
# This is on the studio background
sub_h = arr[70:135, 500:730]
# Text is white/light pixels (> [160, 160, 160])
mask_h = np.all(sub_h > [160, 160, 160], axis=-1)

h_box, w_box = mask_h.shape
for c in range(3):
    channel = sub_h[:, :, c]
    for x in range(w_box):
        for y in range(h_box):
            if mask_h[y, x]:
                # interpolate from left and right non-mask pixels, or top/bot
                # Background is a smooth horizontal/vertical gradient
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
                
                noise = (np.random.rand() - 0.5) * 2.5
                channel[y, x] = np.clip(val + noise, 0, 255)
    sub_h[:, :, c] = channel

arr[70:135, 500:730] = sub_h

clean_img = Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8))
clean_img.save(r'C:\Users\divye\Desktop\Kevalon\AERA\AERA-FRONTEND\src\assets\wear-what\wear-what-banner.jpg', quality=95)
print('Saved clean wear-what-banner.jpg!')
