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

  const aeraConfigs = [
    { track: '0.07em', size: '45px', top: '14.25%' },
    { track: '0.075em', size: '45px', top: '14.25%' },
    { track: '0.08em', size: '45px', top: '14.25%' },
    { track: '0.085em', size: '45px', top: '14.25%' },
    { track: '0.08em', size: '45.2px', top: '14.25%' },
    { track: '0.08em', size: '45px', top: '14.15%' },
    { track: '0.08em', size: '45px', top: '14.35%' }
  ];

  for (let i = 0; i < aeraConfigs.length; i++) {
    const c = aeraConfigs[i];
    await page.evaluate((cfg) => {
      const h2 = document.querySelector('footer[aria-label="Footer"] h2');
      const h2Wrap = h2.parentElement;
      h2Wrap.style.top = cfg.top;
      h2.style.fontSize = cfg.size;
      h2.style.letterSpacing = cfg.track;
    }, c);

    await footerEl.screenshot({ path: `C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/test_aera_${i}.png` });
  }

  await browser.close();
  console.log('Saved AERA test screenshots!');
})();
