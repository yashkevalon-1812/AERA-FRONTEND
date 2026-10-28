const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1024, height: 768 });
  
  await page.setContent(`
    <!DOCTYPE html>
    <html>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Michroma&display=swap" rel="stylesheet">
      <style>
        body { margin: 0; background: #333; }
        .test-heading {
          font-family: 'Michroma', sans-serif;
          color: white;
          text-transform: uppercase;
          display: inline-block;
        }
      </style>
    </head>
    <body>
      <div id="box1" class="test-heading" style="font-size: 24px; line-height: 1.4; letter-spacing: 0.04em;">
        WEAR WHAT<br>MOVES YOU
      </div>
      <div id="box2" class="test-heading" style="font-size: 24.5px; line-height: 1.42; letter-spacing: 0.05em;">
        WEAR WHAT<br>MOVES YOU
      </div>
      <div id="box3" class="test-heading" style="font-size: 25px; line-height: 1.4; letter-spacing: 0.04em;">
        WEAR WHAT<br>MOVES YOU
      </div>
    </body>
    </html>
  `);

  await page.evaluateHandle('document.fonts.ready');

  const rects = await page.evaluate(() => {
    return [1, 2, 3].map(i => {
      const el = document.getElementById('box' + i);
      const r = el.getBoundingClientRect();
      return { id: i, width: r.width, height: r.height };
    });
  });

  console.log('Test heading dimensions:', rects);
  await browser.close();
})();
