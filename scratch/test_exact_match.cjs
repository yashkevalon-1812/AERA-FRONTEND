const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  // Set to 1024 x 594 (so hero is 1024 x 481 after 113px navbar)
  await page.setViewport({ width: 1024, height: 481 + 113 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });

  // Update styles live in DOM to test
  await page.evaluate(() => {
    const hero = document.querySelector('section');
    hero.className = 'relative w-full max-w-[1920px] mx-auto overflow-hidden bg-[#F8F5E8] aspect-[1024/481] min-h-[480px] max-h-[920px] flex flex-col justify-end';

    // Wordmark
    const wordmarkDiv = hero.querySelector('div[aria-hidden="true"]');
    if (wordmarkDiv) {
      wordmarkDiv.className = 'absolute top-[6%] left-1/2 -translate-x-1/2 w-full max-w-[1483px] text-center pointer-events-none select-none z-0 overflow-hidden';
    }

    // Models container
    const modelsDiv = hero.querySelector('div.z-10');
    if (modelsDiv) {
      modelsDiv.className = 'hidden md:flex absolute bottom-0 left-1/2 -translate-x-1/2 h-[92%] w-auto items-end justify-center pointer-events-none z-10';
      const img = modelsDiv.querySelector('img');
      if (img) {
        img.className = 'h-full w-auto object-contain object-bottom select-none';
      }
    }

    // Overlays
    const overlay = hero.querySelector('div.z-20');
    if (overlay) {
      overlay.className = 'hidden md:flex relative z-20 w-full max-w-[1920px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 pb-4 sm:pb-5 md:pb-6 lg:pb-8 xl:pb-10 items-end justify-between pointer-events-none';
      
      const leftCol = overlay.firstElementChild;
      if (leftCol) {
        leftCol.className = 'pointer-events-auto max-w-[280px] lg:max-w-[320px] xl:max-w-[350px] text-left';
      }

      const rightCol = overlay.lastElementChild;
      if (rightCol) {
        rightCol.className = 'pointer-events-auto text-right flex flex-col items-end';
      }
    }
  });

  const heroEl = await page.$('section');
  await heroEl.screenshot({ path: 'C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/test_exact_hero_1024.png' });

  // Also test at 1920 x 1015 (1920 x 902 hero)
  await page.setViewport({ width: 1920, height: 902 + 113 });
  await page.evaluate(() => {
    // re-trigger layout
  });
  const heroEl1920 = await page.$('section');
  await heroEl1920.screenshot({ path: 'C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/test_exact_hero_1920.png' });

  console.log('Test screenshots saved');
  await browser.close();
})();
