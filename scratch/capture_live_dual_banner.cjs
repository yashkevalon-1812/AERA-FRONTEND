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

  const bannerRect = await page.evaluate(() => {
    const allSec = Array.from(document.querySelectorAll('section'));
    const sec = allSec.find(s => s.innerText.includes("MEN'S EDIT"));
    if (sec) {
      sec.scrollIntoView({ behavior: 'instant', block: 'center' });
      const rect = sec.getBoundingClientRect();
      return {
        x: Math.round(rect.left),
        y: Math.round(rect.top + window.scrollY),
        width: Math.round(rect.width),
        height: Math.round(rect.height)
      };
    }
    return null;
  });

  console.log('DualPromotionBanner bounds at 1024px:', bannerRect);

  if (bannerRect) {
    await page.screenshot({
      path: 'AERA-FRONTEND/scratch/live_dual_banner_1024.png',
      clip: bannerRect
    });
  }

  // Also capture at 1440px
  await page.setViewport({ width: 1440, height: 1200, deviceScaleFactor: 1 });
  await new Promise(r => setTimeout(r, 600));
  const rect1440 = await page.evaluate(() => {
    const allSec = Array.from(document.querySelectorAll('section'));
    const sec = allSec.find(s => s.innerText.includes("MEN'S EDIT"));
    if (sec) {
      sec.scrollIntoView({ behavior: 'instant', block: 'center' });
      const rect = sec.getBoundingClientRect();
      return {
        x: Math.round(rect.left),
        y: Math.round(rect.top + window.scrollY),
        width: Math.round(rect.width),
        height: Math.round(rect.height)
      };
    }
    return null;
  });
  if (rect1440) {
    await page.screenshot({
      path: 'AERA-FRONTEND/scratch/live_dual_banner_1440.png',
      clip: rect1440
    });
  }

  // Also capture at 375px
  await page.setViewport({ width: 375, height: 1200, deviceScaleFactor: 1 });
  await new Promise(r => setTimeout(r, 600));
  const rect375 = await page.evaluate(() => {
    const allSec = Array.from(document.querySelectorAll('section'));
    const sec = allSec.find(s => s.innerText.includes("MEN'S EDIT"));
    if (sec) {
      sec.scrollIntoView({ behavior: 'instant', block: 'center' });
      const rect = sec.getBoundingClientRect();
      return {
        x: Math.round(rect.left),
        y: Math.round(rect.top + window.scrollY),
        width: Math.round(rect.width),
        height: Math.round(rect.height)
      };
    }
    return null;
  });
  if (rect375) {
    await page.screenshot({
      path: 'AERA-FRONTEND/scratch/live_dual_banner_375.png',
      clip: rect375
    });
  }

  await browser.close();
  console.log('Finished capturing all viewports successfully!');
})();
