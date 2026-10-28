const path = require('path');
const puppeteer = require(path.resolve(__dirname, '../node_modules/puppeteer-core'));

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 1000, deviceScaleFactor: 1 });
  const htmlPath = 'file:///' + path.resolve(__dirname, 'font_test.html').replace(/\\/g, '/');
  await page.goto(htmlPath, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1000));

  await page.screenshot({ path: path.resolve(__dirname, 'font_test_results.png') });
  await browser.close();
  console.log('Saved font_test_results.png!');
})();
