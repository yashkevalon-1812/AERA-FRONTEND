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
  
  const textInfo = await page.evaluate(() => {
    const allSec = Array.from(document.querySelectorAll('section'));
    const sec = allSec.find(s => s.innerText.includes("MEN'S EDIT"));
    return {
      allH3: Array.from(sec.querySelectorAll('h3')).map(h => ({
        html: h.outerHTML,
        text: h.innerText,
        rect: h.getBoundingClientRect()
      })),
      innerText: sec.innerText
    };
  });
  
  console.log('Text info:', JSON.stringify(textInfo, null, 2));
  await browser.close();
})();
