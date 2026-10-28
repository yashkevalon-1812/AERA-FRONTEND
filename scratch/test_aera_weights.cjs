const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: true,
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 600, height: 400 });

  await page.setContent(`
    <!DOCTYPE html>
    <html>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&display=swap" rel="stylesheet">
      <style>
        body { margin: 20px; background: #615249; color: #EFEBDD; }
        .logo { font-family: 'Cormorant Garamond', Georgia, serif; line-height: 1; text-transform: uppercase; margin-bottom: 20px; display: inline-block; }
      </style>
    </head>
    <body>
      <div id="w500" class="logo" style="font-size: 45px; font-weight: 500; letter-spacing: 0.08em;">AERA</div><br>
      <div id="w600" class="logo" style="font-size: 45px; font-weight: 600; letter-spacing: 0.08em;">AERA</div><br>
      <div id="w700" class="logo" style="font-size: 44px; font-weight: 700; letter-spacing: 0.08em;">AERA</div>
    </body>
    </html>
  `);

  await page.evaluateHandle('document.fonts.ready');
  for (const w of [500, 600, 700]) {
    const el = await page.$('#w' + w);
    const r = await el.boundingBox();
    console.log(`Weight ${w}: width = ${r.width}, height = ${r.height}`);
    await el.screenshot({ path: `C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/aera_weight_${w}.png` });
  }

  await browser.close();
})();
