const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // 1024 viewport
  await page.setViewport({ width: 1024, height: 1600 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  const sections = await page.$$('section');
  console.log('Total sections found:', sections.length);
  if (sections.length > 2) {
    await sections[2].screenshot({ path: 'C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/new_arrivals_1024.png' });
  }

  // 1920 viewport
  await page.setViewport({ width: 1920, height: 1800 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  const sections1920 = await page.$$('section');
  if (sections1920.length > 2) {
    await sections1920[2].screenshot({ path: 'C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/new_arrivals_1920.png' });
  }

  // 768 viewport
  await page.setViewport({ width: 768, height: 1400 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  const sections768 = await page.$$('section');
  if (sections768.length > 2) {
    await sections768[2].screenshot({ path: 'C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/new_arrivals_768.png' });
  }

  // 375 viewport
  await page.setViewport({ width: 375, height: 1400 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  const sections375 = await page.$$('section');
  if (sections375.length > 2) {
    await sections375[2].screenshot({ path: 'C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/new_arrivals_375.png' });
  }

  await browser.close();
  console.log('All New Arrivals screenshots captured successfully!');
})();
