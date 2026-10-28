from PIL import Image
import numpy as np

img = Image.open(r'C:\Users\divye\.gemini\antigravity\brain\a40e8476-2329-48c2-8837-b12cf6408663\.user_uploaded\media_1793190663373_4a8678e1.png').convert('RGB')

# 1. Card 1 (Everyday Minimal): [43, 174, 325, 449] -> 282 x 275
card1 = img.crop((43, 174, 325, 449))
card1.save(r'C:\Users\divye\Desktop\Kevalon\AERA\AERA-FRONTEND\src\assets\trending-now\everyday-minimal.jpg', quality=95)

# 2. Card 2 (After Dark): [351, 33, 674, 449] -> 323 x 416
card2 = img.crop((351, 33, 674, 449))
card2.save(r'C:\Users\divye\Desktop\Kevalon\AERA\AERA-FRONTEND\src\assets\trending-now\after-dark.jpg', quality=95)

# 3. Card 3 (Soft Structure): [701, 33, 983, 327] -> 282 x 294
card3 = img.crop((701, 33, 983, 327))
card3.save(r'C:\Users\divye\Desktop\Kevalon\AERA\AERA-FRONTEND\src\assets\trending-now\soft-structure.jpg', quality=95)

print('Saved raw card crops to src/assets/trending-now/')
