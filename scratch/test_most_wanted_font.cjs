const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&display=swap" rel="stylesheet">
      <style>
        .serif { font-family: 'Cormorant Garamond', Georgia, serif; text-transform: uppercase; display: inline-block; }
      </style>
    </head>
    <body style="background:#97173A; padding: 20px;">
      <span id="t50" class="serif" style="font-size: 50px; font-weight: 500; letter-spacing: 0.10em;">MOST WANTED</span><br>
      <span id="t52_09" class="serif" style="font-size: 52px; font-weight: 500; letter-spacing: 0.09em;">MOST WANTED</span><br>
      <span id="t52_10" class="serif" style="font-size: 52px; font-weight: 500; letter-spacing: 0.10em;">MOST WANTED</span><br>
      <span id="t52_11" class="serif" style="font-size: 52px; font-weight: 500; letter-spacing: 0.11em;">MOST WANTED</span><br>
    </body>
    </html>
  `;
  await page.setContent(html, { waitUntil: 'networkidle0' });

  const metrics = await page.evaluate(() => {
    return ['t50', 't52_09', 't52_10', 't52_11'].map(id => {
      const el = document.getElementById(id);
      return { id, width: el.getBoundingClientRect().width, height: el.getBoundingClientRect().height };
    });
  });
  console.log('Metrics (target width is 359px, height 34px):', metrics);
  await browser.close();
})();
