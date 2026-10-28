from PIL import Image

img = Image.open(r'C:\Users\divye\.gemini\antigravity\brain\a40e8476-2329-48c2-8837-b12cf6408663\.user_uploaded\media_1793190663373_4a8678e1.png')

# 1. Heading: TRENDING NOW
img.crop((35, 40, 310, 150)).save(r'C:\Users\divye\.gemini\antigravity\brain\a40e8476-2329-48c2-8837-b12cf6408663\crop_trending_heading.png')

# 2. Card 1: EVERYDAY MINIMAL
img.crop((43, 174, 325, 449)).save(r'C:\Users\divye\.gemini\antigravity\brain\a40e8476-2329-48c2-8837-b12cf6408663\crop_card1_minimal.png')

# 3. Card 2: AFTER DARK
img.crop((351, 33, 674, 449)).save(r'C:\Users\divye\.gemini\antigravity\brain\a40e8476-2329-48c2-8837-b12cf6408663\crop_card2_after_dark.png')

# 4. Card 3: SOFT STRUCTURE
img.crop((701, 33, 983, 327)).save(r'C:\Users\divye\.gemini\antigravity\brain\a40e8476-2329-48c2-8837-b12cf6408663\crop_card3_soft_structure.png')

# 5. Description text:
img.crop((695, 345, 950, 440)).save(r'C:\Users\divye\.gemini\antigravity\brain\a40e8476-2329-48c2-8837-b12cf6408663\crop_description_text.png')

# 6. Zoom in on description words
img.crop((700, 355, 850, 385)).resize((300, 60)).save(r'C:\Users\divye\.gemini\antigravity\brain\a40e8476-2329-48c2-8837-b12cf6408663\crop_desc_zoom.png')

print('Saved all crops!')
