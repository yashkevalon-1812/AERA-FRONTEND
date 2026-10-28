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

  const fonts = ['"Cormorant Garamond"', '"Playfair Display"', '"Inika"'];
  for (const font of fonts) {
    await page.evaluate((f) => {
      const nav2 = document.querySelector('nav[aria-label="Secondary Footer Navigation"]');
      nav2.style.top = '51.00%';
      nav2.style.gap = '44px';
      nav2.querySelectorAll('a').forEach(a => {
        a.style.fontFamily = f + ', serif';
        a.style.fontSize = '11.2px';
        a.style.fontWeight = '500';
      });
    }, font);

    const safeName = font.replace(/[" ]/g, '');
    await footerEl.screenshot({ path: `C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/test_font_${safeName}.png` });
  }

  await browser.close();
  console.log('Saved font test screenshots!');
})();
