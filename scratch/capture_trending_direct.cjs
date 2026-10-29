const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: true,
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  
  const viewports = [
    { width: 1024, height: 900, name: '1024' },
    { width: 1440, height: 1000, name: '1440' },
    { width: 375, height: 900, name: '375' }
  ];

  for (const vp of viewports) {
    await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 1 });
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
    await page.evaluateHandle('document.fonts.ready');
    await new Promise(r => setTimeout(r, 800));

    const sectionEl = await page.$('section[aria-label="Trending Now"]');
    if (!sectionEl) continue;

    await page.evaluate(() => {
      const el = document.querySelector('section[aria-label="Trending Now"]');
      el.scrollIntoView({ behavior: 'instant', block: 'center' });
    });
    await new Promise(r => setTimeout(r, 400));

    const outPath = `C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/trending_direct_live_${vp.name}.png`;
    await sectionEl.screenshot({ path: outPath });
    console.log(`Saved screenshot for ${vp.name} to ${outPath}`);

    // If 1024, test the white shine hover as well!
    if (vp.name === '1024') {
      const allCards = await page.$$('section[aria-label="Trending Now"] .luxury-shine-card');
      const middleCard = allCards[1];
      const box = await middleCard.boundingBox();
      await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
      await new Promise(r => setTimeout(r, 350));
      const hoverPath = 'C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/trending_direct_shine_hover.png';
      await sectionEl.screenshot({ path: hoverPath });
      console.log('Saved hover screenshot to', hoverPath);
    }
  }

  await browser.close();
  console.log('All screenshots captured!');
})();
