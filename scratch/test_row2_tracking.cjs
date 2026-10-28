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

  const trackConfigs = [
    { track: '0.02em', gap: '44px', size: '11.3px' },
    { track: '0.03em', gap: '44px', size: '11.3px' },
    { track: '0.04em', gap: '44px', size: '11.3px' },
    { track: '0.05em', gap: '44px', size: '11.3px' },
    { track: '0.04em', gap: '43.5px', size: '11.2px' },
    { track: '0.05em', gap: '43.5px', size: '11.2px' },
    { track: '0.04em', gap: '44px', size: '11.1px' },
  ];

  for (let i = 0; i < trackConfigs.length; i++) {
    const c = trackConfigs[i];
    await page.evaluate((cfg) => {
      const nav2 = document.querySelector('nav[aria-label="Secondary Footer Navigation"]');
      nav2.style.top = '51.00%';
      nav2.style.gap = cfg.gap;
      nav2.querySelectorAll('a').forEach(a => {
        a.style.fontFamily = '"Cormorant Garamond", serif';
        a.style.fontSize = cfg.size;
        a.style.letterSpacing = cfg.track;
        a.style.fontWeight = '500';
      });
    }, c);

    await footerEl.screenshot({ path: `C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/test_track_${i}.png` });
  }

  await browser.close();
  console.log('Saved tracking test screenshots!');
})();
