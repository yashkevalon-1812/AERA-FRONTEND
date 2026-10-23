const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1024, height: 1200 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });

  const h2Style = await page.evaluate(() => {
    const sections = document.querySelectorAll('section');
    const h2 = sections[1]?.querySelector('h2');
    if (!h2) return null;
    const s = window.getComputedStyle(h2);
    return {
      className: h2.className,
      fontFamily: s.fontFamily,
      fontWeight: s.fontWeight,
      fontSize: s.fontSize,
      lineHeight: s.lineHeight
    };
  });
  console.log('H2 Computed Style:', h2Style);
  await browser.close();
})();
