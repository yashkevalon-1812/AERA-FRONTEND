const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  
  for (const width of [1024, 1280, 1440, 1536, 1920]) {
    await page.setViewport({ width, height: 900, deviceScaleFactor: 1 });
    await page.goto('http://localhost:5173/', { waitUntil: 'domcontentloaded' });
    await new Promise(r => setTimeout(r, 600));
    
    const data = await page.evaluate(() => {
      const h3 = Array.from(document.querySelectorAll('h3')).find(el => el.innerText.includes('THE MODERN MAN'));
      const rect = h3.getBoundingClientRect();
      const cs = window.getComputedStyle(h3);
      return {
        fontSize: cs.fontSize,
        width: Math.round(rect.width),
        height: Math.round(rect.height),
        left: Math.round(rect.left)
      };
    });
    console.log(`Viewport ${width}px: font=${data.fontSize}, width=${data.width}px, height=${data.height}px, left=${data.left}px, card_width=${width/2}px, text_ratio=${(data.width/(width/2)).toFixed(3)}`);
  }
  
  await browser.close();
})();
