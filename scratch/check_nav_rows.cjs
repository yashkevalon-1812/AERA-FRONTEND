const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: true,
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1024, height: 900 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await page.evaluateHandle('document.fonts.ready');

  const res = await page.evaluate(() => {
    const footer = document.querySelector('footer[aria-label="Footer"]');
    const fTop = footer.getBoundingClientRect().top;
    const nav1 = footer.querySelector('nav[aria-label="Primary Footer Navigation"]');
    const nav2 = footer.querySelector('nav[aria-label="Secondary Footer Navigation"]');
    const leg = footer.querySelector('nav[aria-label="Legal Navigation"]');
    const r1 = nav1.getBoundingClientRect();
    const r2 = nav2.getBoundingClientRect();
    const rl = leg.getBoundingClientRect();
    return {
      nav1: { left: r1.left, w: r1.width, y: r1.top - fTop, center: r1.left + r1.width / 2 },
      nav2: { left: r2.left, w: r2.width, y: r2.top - fTop, center: r2.left + r2.width / 2 },
      legal: { left: rl.left, w: rl.width, y: rl.top - fTop, center: rl.left + rl.width / 2 },
    };
  });

  console.log('Nav rows:', res);
  await browser.close();
})();
