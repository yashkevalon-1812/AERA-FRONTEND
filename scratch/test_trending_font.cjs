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
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600&display=swap" rel="stylesheet">
      <style>
        .sans { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 400; display: inline-block; }
      </style>
    </head>
    <body style="background:#F8F5E6; padding: 20px;">
      <span id="p16" class="sans" style="font-size: 16px;">The pieces defining</span><br>
      <span id="p17" class="sans" style="font-size: 17px;">The pieces defining</span><br>
      <span id="p18" class="sans" style="font-size: 18px;">The pieces defining</span><br>
      <span id="p19" class="sans" style="font-size: 19px;">The pieces defining</span><br>
    </body>
    </html>
  `;
  await page.setContent(html, { waitUntil: 'networkidle0' });

  const metrics = await page.evaluate(() => {
    return ['p16', 'p17', 'p18', 'p19'].map(id => {
      const el = document.getElementById(id);
      return { id, width: el.getBoundingClientRect().width, height: el.getBoundingClientRect().height };
    });
  });
  console.log('Metrics (target width is 159px):', metrics);
  await browser.close();
})();
