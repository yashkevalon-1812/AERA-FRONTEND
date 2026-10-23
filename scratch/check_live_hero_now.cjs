const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });

  // Take screenshot of the hero section
  const hero = await page.$('section');
  await hero.screenshot({ path: 'C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/live_hero_now.png' });

  // Also inspect img bounding rect and computed styles
  const data = await page.evaluate(() => {
    const hero = document.querySelector('section');
    const heroRect = hero.getBoundingClientRect();
    const img = hero.querySelector('img');
    const imgRect = img ? img.getBoundingClientRect() : null;
    const imgParent = img ? img.parentElement.getBoundingClientRect() : null;

    return {
      hero: { top: heroRect.top, bottom: heroRect.bottom, width: heroRect.width, height: heroRect.height },
      imgParent: imgParent ? { top: imgParent.top, bottom: imgParent.bottom, width: imgParent.width, height: imgParent.height } : null,
      img: imgRect ? { top: imgRect.top, bottom: imgRect.bottom, width: imgRect.width, height: imgRect.height } : null,
      imgNatural: img ? { naturalWidth: img.naturalWidth, naturalHeight: img.naturalHeight } : null
    };
  });

  console.log(JSON.stringify(data, null, 2));
  await browser.close();
})();
