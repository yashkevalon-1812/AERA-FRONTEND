const puppeteer = require('puppeteer-core');
const fs = require('fs');

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

  const testConfigs = [
    { top: '50.56%', fontSize: '11.5px', gap: '44px', weight: 500 },
    { top: '50.84%', fontSize: '11.5px', gap: '44px', weight: 500 },
    { top: '51.12%', fontSize: '11.5px', gap: '44px', weight: 500 },
    { top: '51.12%', fontSize: '11.5px', gap: '44px', weight: 600 },
    { top: '50.84%', fontSize: '11.2px', gap: '44.5px', weight: 500 },
    { top: '50.84%', fontSize: '11.0px', gap: '45px', weight: 500 },
    { top: '51.00%', fontSize: '11.2px', gap: '44px', weight: 500 },
  ];

  const footerEl = await page.$('footer[aria-label="Footer"]');

  for (let i = 0; i < testConfigs.length; i++) {
    const cfg = testConfigs[i];
    await page.evaluate((c) => {
      const nav2 = document.querySelector('nav[aria-label="Secondary Footer Navigation"]');
      nav2.style.top = c.top;
      nav2.style.gap = c.gap;
      nav2.querySelectorAll('a').forEach(a => {
        a.style.fontSize = c.fontSize;
        a.style.fontWeight = c.weight;
      });
    }, cfg);

    await footerEl.screenshot({ path: `C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/test_row2_${i}.png` });
  }

  await browser.close();
  console.log('Saved all test screenshots!');
})();
