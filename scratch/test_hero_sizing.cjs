const puppeteer = require('puppeteer-core');
const fs = require('fs');

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const viewports = [
    { name: 'user_screen_1024x484', width: 1024, height: 484 },
    { name: 'laptop_1366x768', width: 1366, height: 768 },
    { name: 'desktop_1440x900', width: 1440, height: 900 },
    { name: 'fullhd_1920x1080', width: 1920, height: 1080 },
    { name: 'figma_exact_1920x1239', width: 1920, height: 1239 },
  ];

  for (const vp of viewports) {
    const page = await browser.newPage();
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
    
    // Evaluate hero section dimensions and visibility of elements
    const metrics = await page.evaluate(() => {
      const hero = document.querySelector('section');
      const h1 = document.querySelector('h1');
      const button = document.querySelector('button.inline-flex, section button');
      const img = document.querySelector('section img');
      const nav = document.querySelector('header');
      const announcement = document.querySelector('div[style*="35px"]');

      const heroRect = hero ? hero.getBoundingClientRect() : null;
      const h1Rect = h1 ? h1.getBoundingClientRect() : null;
      const btnRect = button ? button.getBoundingClientRect() : null;
      const imgRect = img ? img.getBoundingClientRect() : null;

      return {
        viewport: { innerWidth: window.innerWidth, innerHeight: window.innerHeight },
        hero: heroRect ? { top: heroRect.top, bottom: heroRect.bottom, width: heroRect.width, height: heroRect.height } : null,
        h1: h1Rect ? { top: h1Rect.top, bottom: h1Rect.bottom, text: h1.innerText.replace(/\n/g, ' ') } : null,
        button: btnRect ? { top: btnRect.top, bottom: btnRect.bottom, text: button.innerText } : null,
        img: imgRect ? { width: imgRect.width, height: imgRect.height, top: imgRect.top, bottom: imgRect.bottom } : null,
        isH1Visible: h1Rect ? (h1Rect.bottom <= window.innerHeight && h1Rect.top >= 0) : false,
        isButtonVisible: btnRect ? (btnRect.bottom <= window.innerHeight && btnRect.top >= 0) : false,
      };
    });

    console.log(`\n=== Viewport: ${vp.name} (${vp.width}x${vp.height}) ===`);
    console.log(JSON.stringify(metrics, null, 2));

    await page.screenshot({ 
      path: `C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/preview_${vp.name}.png` 
    });
    await page.close();
  }

  await browser.close();
  console.log('\nAll preview screenshots saved.');
}

capture().catch(err => console.error(err));
