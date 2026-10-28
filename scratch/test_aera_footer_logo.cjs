const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  
  await page.setContent(`
    <!DOCTYPE html>
    <html>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&display=swap" rel="stylesheet">
      <style>
        body { margin: 0; background: #333; }
        .test-logo {
          font-family: 'Cormorant Garamond', Georgia, serif;
          color: white;
          text-transform: uppercase;
          line-height: 1;
          display: inline-block;
        }
      </style>
    </head>
    <body>
      <div id="l1" class="test-logo" style="font-size: 42px; font-weight: 500; letter-spacing: 0.28em;">AERA</div>
      <div id="l2" class="test-logo" style="font-size: 44px; font-weight: 500; letter-spacing: 0.25em;">AERA</div>
      <div id="l3" class="test-logo" style="font-size: 45px; font-weight: 500; letter-spacing: 0.24em;">AERA</div>
      <div id="l4" class="test-logo" style="font-size: 46px; font-weight: 500; letter-spacing: 0.22em;">AERA</div>
    </body>
    </html>
  `);

  await page.evaluateHandle('document.fonts.ready');
  const rects = await page.evaluate(() => {
    return [1, 2, 3, 4].map(i => {
      const el = document.getElementById('l' + i);
      const r = el.getBoundingClientRect();
      return { id: i, width: r.width, height: r.height };
    });
  });

  console.log('AERA logo test rects:', rects);
  await browser.close();
})();
