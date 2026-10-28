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
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
    </head>
    <body>
      <div id="t1" style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 8.5px; font-weight: 500; letter-spacing: 0.04em; text-transform: uppercase; display: inline-block;">DISCOVER OUR STORY</div>
      <div id="t2" style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 8.8px; font-weight: 500; letter-spacing: 0.03em; text-transform: uppercase; display: inline-block;">DISCOVER OUR STORY</div>
      <div id="t3" style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 9.0px; font-weight: 500; letter-spacing: 0.02em; text-transform: uppercase; display: inline-block;">DISCOVER OUR STORY</div>
      <div id="t4" style="font-family: 'Inter', sans-serif; font-size: 8.8px; font-weight: 500; letter-spacing: 0.03em; text-transform: uppercase; display: inline-block;">DISCOVER OUR STORY</div>
    </body>
    </html>
  `);

  await page.evaluateHandle('document.fonts.ready');
  const widths = await page.evaluate(() => {
    return [1, 2, 3, 4].map(i => {
      const el = document.getElementById('t' + i);
      return { id: i, width: el.getBoundingClientRect().width };
    });
  });

  console.log('Text widths:', widths);
  await browser.close();
})();
