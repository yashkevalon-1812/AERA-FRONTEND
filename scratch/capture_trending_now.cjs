const puppeteer = require('puppeteer-core');

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
    await new Promise(r => setTimeout(r, 1000));
    
    const rect = await page.evaluate(() => {
      const sec = document.querySelector('section[aria-label="Trending Now"]');
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
    
    if (rect) {
      await page.screenshot({
        path: `C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/trending_live_${vp.name}.png`,
        clip: rect
      });
      console.log(`Captured ${vp.name}px:`, rect);
    } else {
      console.error(`Section not found for ${vp.name}px!`);
    }
  }

  await browser.close();
  console.log('All viewports captured successfully!');
})();
