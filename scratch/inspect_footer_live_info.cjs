const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1024, height: 900, deviceScaleFactor: 1 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await page.evaluateHandle('document.fonts.ready');

  const info = await page.evaluate(() => {
    const footer = document.querySelector('footer[aria-label="Footer"]');
    const h2 = footer.querySelector('h2');
    const fRect = footer.getBoundingClientRect();
    const hRect = h2.getBoundingClientRect();
    return {
      footer: { x: fRect.left, w: fRect.width, h: fRect.height },
      h2: { x: hRect.left, y: hRect.top - fRect.top, w: hRect.width, h: hRect.height, center: hRect.left + hRect.width / 2 }
    };
  });

  console.log('Live element info on 1024:', info);
  await browser.close();
})();
