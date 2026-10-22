const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  // 1. Capture at 1024 width (exact width of reference image)
  await page.setViewport({ width: 1024, height: 768 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  const hero1024 = await page.$('section');
  await hero1024.screenshot({ path: 'C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/verified_hero_1024.png' });

  // 2. Capture at 1920 width
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  const hero1920 = await page.$('section');
  await hero1920.screenshot({ path: 'C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/verified_hero_1920.png' });

  console.log('Screenshots saved successfully');
  await browser.close();
})();
