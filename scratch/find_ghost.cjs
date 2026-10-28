const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1024, height: 1200, deviceScaleFactor: 1 });
  await page.goto('http://localhost:5173/', { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 1200));
  
  const ghostInfo = await page.evaluate(() => {
    // Find all elements containing text 'MODERN' or 'MAN'
    const all = Array.from(document.querySelectorAll('*'));
    const matches = all.filter(el => {
      // Direct text nodes only or small elements
      return el.children.length === 0 && (el.innerText || '').includes('MAN');
    });
    
    return matches.map(el => {
      const rect = el.getBoundingClientRect();
      const cs = window.getComputedStyle(el);
      return {
        tag: el.tagName,
        className: el.className,
        text: el.innerText,
        top: Math.round(rect.top + window.scrollY),
        left: Math.round(rect.left),
        width: Math.round(rect.width),
        height: Math.round(rect.height),
        opacity: cs.opacity,
        position: cs.position,
        zIndex: cs.zIndex,
        color: cs.color,
        parentTag: el.parentElement ? el.parentElement.tagName : null,
        parentClass: el.parentElement ? el.parentElement.className : null
      };
    });
  });
  
  console.log('Ghost elements:', JSON.stringify(ghostInfo, null, 2));
  await browser.close();
})();
