const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  await page.goto('http://localhost:5173/', { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('section');

  const secTexts = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('section')).map(s => s.innerText.slice(0, 40).replace(/\n/g, ' '));
  });
  console.log('Sections detected:', secTexts);

  // Scroll to ArtOfDressing section
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

  // Take screenshot of viewport showing the section in context
  await page.screenshot({
    path: 'C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/homepage_art_of_dressing_view.png'
  });

  await browser.close();
  console.log('Done!');
})();
