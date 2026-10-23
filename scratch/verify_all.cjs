const puppeteer = require('puppeteer-core');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  const viewports = [1920, 1440, 1280, 1024, 768, 375];
  const results = [];

  for (const w of viewports) {
    await page.setViewport({ width: w, height: 900 });
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 500));
    
    const hero = await page.$('section');
    if (hero) {
      await hero.screenshot({ path: `C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/verify_responsive_${w}.png` });
    }

    const data = await page.evaluate(() => {
      const hero = document.querySelector('section');
      if (!hero) return null;
      const heroRect = hero.getBoundingClientRect();
      const imgs = Array.from(hero.querySelectorAll('img')).filter(img => window.getComputedStyle(img).display !== 'none' && img.offsetParent !== null);
      return {
        heroHeight: heroRect.height,
        heroBottom: heroRect.bottom,
        imgs: imgs.map(img => {
          const r = img.getBoundingClientRect();
          return {
            src: img.src.substring(img.src.lastIndexOf('/') + 1),
            top: r.top,
            bottom: r.bottom,
            height: r.height,
            width: r.width,
            clippedBottomPx: Math.max(0, r.bottom - heroRect.bottom)
          };
        })
      };
    });
    results.push({ viewportWidth: w, data });
  }

  console.log(JSON.stringify(results, null, 2));
  await browser.close();
})();
