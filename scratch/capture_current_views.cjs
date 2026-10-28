const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  
  // Capture 1440px
  await page.setViewport({ width: 1440, height: 1000, deviceScaleFactor: 1 });
  await page.goto('http://localhost:5173/', { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 1200));
  
  const secRect1440 = await page.evaluate(() => {
    const sec = Array.from(document.querySelectorAll('section')).find(s => s.innerText.includes("MEN'S EDIT"));
    sec.scrollIntoView({ behavior: 'instant', block: 'center' });
    const rect = sec.getBoundingClientRect();
    return { x: Math.round(rect.left), y: Math.round(rect.top + window.scrollY), width: Math.round(rect.width), height: Math.round(rect.height) };
  });
  
  if (secRect1440) {
    await page.screenshot({
      path: 'C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/live_1440_current.png',
      clip: secRect1440
    });
  }

  // Capture 1920px
  await page.setViewport({ width: 1920, height: 1200, deviceScaleFactor: 1 });
  await new Promise(r => setTimeout(r, 800));
  const secRect1920 = await page.evaluate(() => {
    const sec = Array.from(document.querySelectorAll('section')).find(s => s.innerText.includes("MEN'S EDIT"));
    sec.scrollIntoView({ behavior: 'instant', block: 'center' });
    const rect = sec.getBoundingClientRect();
    return { x: Math.round(rect.left), y: Math.round(rect.top + window.scrollY), width: Math.round(rect.width), height: Math.round(rect.height) };
  });
  
  if (secRect1920) {
    await page.screenshot({
      path: 'C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/live_1920_current.png',
      clip: secRect1920
    });
  }

  console.log('1440 rect:', secRect1440);
  console.log('1920 rect:', secRect1920);
  await browser.close();
})();
