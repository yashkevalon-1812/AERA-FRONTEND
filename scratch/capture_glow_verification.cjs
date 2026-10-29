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

  await page.evaluate(() => {
    const el = document.querySelector('section[aria-label="Trending Now"]');
    el.scrollIntoView({ behavior: 'instant', block: 'center' });
  });
  await new Promise(r => setTimeout(r, 400));

  // 1. Resting state (decreased dark shade)
  const restingPath = 'C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/trending_glow_resting.png';
  await sectionEl.screenshot({ path: restingPath });
  console.log('Saved resting state to', restingPath);

  // 2. Hover over Middle Card (AFTER DARK)
  const allCards = await page.$$('section[aria-label="Trending Now"] .luxury-shine-card');
  const middleCard = allCards[1];
  const box = await middleCard.boundingBox();
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);

  // Wait 400ms (mid-sweep + radiant glow)
  await new Promise(r => setTimeout(r, 400));
  const hoverSweepPath = 'C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/trending_glow_sweep.png';
  await sectionEl.screenshot({ path: hoverSweepPath });
  console.log('Saved hover sweep to', hoverSweepPath);

  // Wait 1200ms (beam has passed, but sustained radial white glow and aura remain radiant on card!)
  await new Promise(r => setTimeout(r, 1000));
  const hoverSustainedPath = 'C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/trending_glow_sustained.png';
  await sectionEl.screenshot({ path: hoverSustainedPath });
  console.log('Saved sustained hover glow to', hoverSustainedPath);

  await browser.close();
  console.log('All glow captures finished!');
})();
