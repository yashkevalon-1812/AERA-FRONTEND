import numpy as np
from PIL import Image

ref = Image.open('C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/raw_footer_ref.png').convert('RGB')
live = Image.open('C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/footer_live_1024.png').convert('RGB')

def compare_row(y0, y1, x0, x1, name):
    r_crop = ref.crop((x0, y0, x1, y1))
    l_crop = live.crop((x0, y0, x1, y1))
    
    w = x1 - x0
    h = y1 - y0
    comp = Image.new('RGB', (w * 2 + 10, h))
    comp.paste(r_crop, (0, 0))
    comp.paste(l_crop, (w + 10, 0))
    comp.resize(((w * 2 + 10) * 3, h * 3), Image.Resampling.NEAREST).save(f'C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/footer_comp_{name}.png')
    
    diff = np.mean(np.abs(np.array(r_crop).astype(float) - np.array(l_crop).astype(float)))
    print(f'{name:15s}: y=[{y0}, {y1}], x=[{x0}, {x1}] -> MAE = {diff:.2f}')

# 1. AERA
compare_row(50, 95, 430, 590, 'aera')
# 2. Row 1
compare_row(112, 133, 260, 770, 'row1')
# 3. Row 2
compare_row(180, 202, 260, 760, 'row2')
# 4. Social Icons
compare_row(220, 252, 445, 580, 'icons')
# 5. Legal Row
compare_row(272, 289, 430, 595, 'legal')
# 6. Copyright
compare_row(300, 318, 460, 565, 'copyright')
