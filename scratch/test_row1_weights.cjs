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

  const footerEl = await page.$('footer[aria-label="Footer"]');

  for (const w of [400, 500, 600]) {
    await page.evaluate((weight) => {
      const nav1 = document.querySelector('nav[aria-label="Primary Footer Navigation"]');
      nav1.querySelectorAll('a').forEach(a => {
        a.style.fontWeight = weight;
      });
    }, w);

    await footerEl.screenshot({ path: `C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/test_row1_w${w}.png` });
  }

  await browser.close();
  console.log('Saved row 1 weight test screenshots!');
})();
