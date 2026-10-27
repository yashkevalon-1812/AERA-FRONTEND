const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1024, height: 1200 });
  await page.goto('http://localhost:5173/');
  await new Promise(r => setTimeout(r, 2000));

  const artSec = await page.evaluate(() => {
    const allSec = Array.from(document.querySelectorAll('section'));
    const sec = allSec.find(s => s.innerText.includes('THE ART'));
    if (sec) {
      sec.scrollIntoView({ behavior: 'instant', block: 'center' });
      const rect = sec.getBoundingClientRect();
      return {
        x: rect.left,
        y: rect.top + window.scrollY,
        width: rect.width,
        height: rect.height
      };
    }
    return null;
  });

  console.log('ArtOfDressing on page:', artSec);

  if (artSec) {
    await page.screenshot({
      path: 'C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/verified_homepage_art_dressing.png',
      clip: artSec
    });
  }

  await browser.close();
  console.log('Screenshot captured!');
})();
