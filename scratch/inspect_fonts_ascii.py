import numpy as np
from PIL import Image

ref = Image.open('C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/raw_footer_ref.png').convert('RGB')
live = Image.open('C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/footer_live_1024.png').convert('RGB')

arr_r = np.array(ref)
arr_l = np.array(live)

print('=== 1. AERA WORDMARK ===')
# Look at Ref AERA vs Live AERA at x=440..585, y=55..90
mask_r_aera = np.all(arr_r[55:90, 440:585] > [170, 160, 150], axis=-1)
mask_l_aera = np.all(arr_l[55:90, 440:585] > [170, 160, 150], axis=-1)

# Find first letter 'A' in AERA: x=446..475
print('Ref AERA letter A (x=446..475):')
for y in range(0, 32, 2):
    line = ''.join(['#' if mask_r_aera[y, x] else '.' for x in range(6, 36)])
    print(f'{y:2d}: {line}')

print('\nLive AERA letter A (x=446..475):')
for y in range(0, 32, 2):
    line = ''.join(['#' if mask_l_aera[y, x] else '.' for x in range(6, 36)])
    print(f'{y:2d}: {line}')

print('\n=== 2. ROW 1 (NEW COLLECTIONS) ===')
# Look at 'NEW' x=280..320, y=116..128
mask_r_r1 = np.all(arr_r[116:128, 280:320] > [160, 150, 140], axis=-1)
mask_l_r1 = np.all(arr_l[116:128, 280:320] > [160, 150, 140], axis=-1)

print('Ref NEW (x=280..320):')
for y in range(mask_r_r1.shape[0]):
    line = ''.join(['#' if mask_r_r1[y, x] else '.' for x in range(35)])
    print(f'{y:2d}: {line}')

print('\nLive NEW (x=280..320):')
for y in range(mask_l_r1.shape[0]):
    line = ''.join(['#' if mask_l_r1[y, x] else '.' for x in range(35)])
    print(f'{y:2d}: {line}')

print('\n=== 3. ROW 2 (ABOUT) ===')
mask_r_r2 = np.all(arr_r[185:198, 280:330] > [160, 150, 140], axis=-1)
mask_l_r2 = np.all(arr_l[185:198, 280:330] > [160, 150, 140], axis=-1)

print('Ref ABOUT (x=280..330):')
for y in range(mask_r_r2.shape[0]):
    line = ''.join(['#' if mask_r_r2[y, x] else '.' for x in range(48)])
    print(f'{y:2d}: {line}')

print('\nLive ABOUT (x=280..330):')
for y in range(mask_l_r2.shape[0]):
    line = ''.join(['#' if mask_l_r2[y, x] else '.' for x in range(48)])
    print(f'{y:2d}: {line}')
