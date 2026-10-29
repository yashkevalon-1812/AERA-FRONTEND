const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: true,
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1024, height: 900, deviceScaleFactor: 1 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await page.evaluateHandle('document.fonts.ready');
  await new Promise(r => setTimeout(r, 800));

  const sectionEl = await page.$('section[aria-label="Trending Now"]');
  if (!sectionEl) {
    console.error('Trending Now section not found!');
    await browser.close();
    return;
  }

  // Scroll section into view
  await page.evaluate(() => {
    const el = document.querySelector('section[aria-label="Trending Now"]');
    el.scrollIntoView({ behavior: 'instant', block: 'center' });
  });
  await new Promise(r => setTimeout(r, 400));

  // 1. Capture Resting State
  const restingPath = 'C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/trending_shine_resting.png';
  await sectionEl.screenshot({ path: restingPath });
  console.log('Saved resting state to', restingPath);

  // 2. Hover over Card 2 (AFTER DARK) and Card 1 (EVERYDAY MINIMAL)
  const card2 = await page.$('section[aria-label="Trending Now"] .luxury-shine-card:nth-of-type(1)');
  const allCards = await page.$$('section[aria-label="Trending Now"] .luxury-shine-card');
  console.log(`Found ${allCards.length} cards`);

  // Hover over the middle card (After Dark, index 1)
  const middleCard = allCards[1];
  const box = await middleCard.boundingBox();
  console.log('Middle card bounding box:', box);

  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  
  // Wait 350ms so the shine beam is right in the middle of sweeping across the card!
  await new Promise(r => setTimeout(r, 350));
  const hoverMidPath = 'C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/trending_shine_hover_mid.png';
  await sectionEl.screenshot({ path: hoverMidPath });
  console.log('Saved mid-hover sweep screenshot to', hoverMidPath);

  // Wait another 500ms for full settle
  await new Promise(r => setTimeout(r, 500));
  const hoverSettlePath = 'C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/trending_shine_hover_settle.png';
  await sectionEl.screenshot({ path: hoverSettlePath });
  console.log('Saved settled hover screenshot to', hoverSettlePath);

  // Hover over Card 1 (EVERYDAY MINIMAL)
  const card1 = allCards[0];
  const box1 = await card1.boundingBox();
  await page.mouse.move(box1.x + box1.width / 2, box1.y + box1.height / 2);
  await new Promise(r => setTimeout(r, 350));
  const hoverCard1Path = 'C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/trending_shine_card1_mid.png';
  await sectionEl.screenshot({ path: hoverCard1Path });
  console.log('Saved card 1 mid-hover sweep screenshot to', hoverCard1Path);

  await browser.close();
  console.log('All hover screenshots captured successfully!');
})();
