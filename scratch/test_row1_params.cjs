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

  const row1Configs = [
    { track: '0.06em', size: '10px', top: '32.68%' },
    { track: '0.07em', size: '10px', top: '32.68%' },
    { track: '0.08em', size: '10px', top: '32.68%' },
    { track: '0.09em', size: '10px', top: '32.68%' },
    { track: '0.08em', size: '9.8px', top: '32.68%' },
    { track: '0.08em', size: '10.2px', top: '32.68%' },
    { track: '0.08em', size: '10px', top: '32.40%' }
  ];

  for (let i = 0; i < row1Configs.length; i++) {
    const c = row1Configs[i];
    await page.evaluate((cfg) => {
      const nav1 = document.querySelector('nav[aria-label="Primary Footer Navigation"]');
      nav1.style.top = cfg.top;
      nav1.querySelectorAll('a').forEach(a => {
        a.style.fontSize = cfg.size;
        a.style.letterSpacing = cfg.track;
      });
    }, c);

    await footerEl.screenshot({ path: `C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/test_row1_${i}.png` });
  }

  await browser.close();
  console.log('Saved Row 1 test screenshots!');
})();
