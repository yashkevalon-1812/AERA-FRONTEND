const path = require('path');
const puppeteer = require(path.resolve(__dirname, '../node_modules/puppeteer-core'));

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1600, deviceScaleFactor: 1 });
  await page.goto('http://localhost:5173/', { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 1200));

  const sections = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('section')).map((s, i) => {
      const rect = s.getBoundingClientRect();
      return {
        i,
        top: Math.round(rect.top + window.scrollY),
        bottom: Math.round(rect.bottom + window.scrollY),
        height: Math.round(rect.height),
        text: s.innerText.slice(0, 30).replace(/\n/g, ' ')
      };
    });
  });

  console.log('Found sections:', sections);

  // The last section is DualPromotionBanner, the second to last is ShopTheEdit
  if (sections.length >= 2) {
    const editSec = sections[sections.length - 2];
    const dualSec = sections[sections.length - 1];
    
    await page.screenshot({
      path: 'C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/homepage_flow_edit_and_dual.png',
      clip: {
        x: 0,
        y: editSec.top,
        width: 1440,
        height: dualSec.bottom - editSec.top
      }
    });
    console.log('Saved homepage_flow_edit_and_dual.png successfully!');
  }

  await browser.close();
})();
