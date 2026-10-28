const puppeteer = require('puppeteer-core');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  
  const viewports = [
    { width: 1024, height: 900, name: '1024' },
    { width: 1440, height: 1000, name: '1440' },
    { width: 1536, height: 1000, name: '1536' },
    { width: 1920, height: 1200, name: '1920' },
    { width: 375, height: 900, name: '375' }
  ];

  for (const vp of viewports) {
    await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 1 });
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
    await page.evaluateHandle('document.fonts.ready');
    await new Promise(r => setTimeout(r, 800));
    
    const rect = await page.evaluate(() => {
      const sec = document.querySelector('section[aria-label="Wear What Moves You"]');
      if (!sec) return null;
      sec.scrollIntoView({ behavior: 'instant', block: 'center' });
      const r = sec.getBoundingClientRect();
      return {
        x: Math.round(r.left),
        y: Math.round(r.top + window.scrollY),
        width: Math.round(r.width),
        height: Math.round(r.height)
      };
    });

    if (!rect) {
      console.error(`Section not found for ${vp.name}`);
      continue;
    }

    console.log(`Viewport ${vp.name}: section bounds =`, rect);

    const outPath = `C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/wear_what_live_${vp.name}.png`;
    
    // Screenshot exact element
    const secEl = await page.$('section[aria-label="Wear What Moves You"]');
    await secEl.screenshot({ path: outPath });
    console.log(`Saved screenshot to ${outPath}`);
  }

  await browser.close();
  console.log('Finished capturing all viewports!');
})();
