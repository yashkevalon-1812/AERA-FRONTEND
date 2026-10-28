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

  const info = await page.evaluate(() => {
    const footer = document.querySelector('footer[aria-label="Footer"]');
    const fTop = footer.getBoundingClientRect().top;
    
    const getElInfo = (el) => {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      const s = window.getComputedStyle(el);
      return {
        text: el.innerText.trim(),
        fontFamily: s.fontFamily,
        fontSize: s.fontSize,
        fontWeight: s.fontWeight,
        letterSpacing: s.letterSpacing,
        color: s.color,
        width: Math.round(r.width * 10) / 10,
        height: Math.round(r.height * 10) / 10,
        left: Math.round(r.left * 10) / 10,
        top: Math.round((r.top - fTop) * 10) / 10
      };
    };

    const wordmark = getElInfo(footer.querySelector('h2'));
    const row1Links = Array.from(footer.querySelectorAll('nav[aria-label="Primary Footer Navigation"] a')).map(getElInfo);
    const row2Links = Array.from(footer.querySelectorAll('nav[aria-label="Secondary Footer Navigation"] a')).map(getElInfo);
    const legalLinks = Array.from(footer.querySelectorAll('nav[aria-label="Legal Navigation"] a')).map(getElInfo);
    const copyright = getElInfo(footer.querySelector('p'));

    return { wordmark, row1Links, row2Links, legalLinks, copyright };
  });

  console.log(JSON.stringify(info, null, 2));
  await browser.close();
})();
