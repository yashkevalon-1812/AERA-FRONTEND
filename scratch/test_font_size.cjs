const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1024, height: 400, deviceScaleFactor: 1 });
  
  const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500&family=Inter:wght@400;500&display=swap" rel="stylesheet">
    <style>
      body { margin: 0; padding: 20px; background: #EAECEE; color: #615249; }
      .pjs { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 400; }
      .inter { font-family: 'Inter', sans-serif; font-weight: 400; }
    </style>
  </head>
  <body>
    <!-- Target width for line 1 is 205px -->
    <h3>Plus Jakarta Sans</h3>
    <div id="pjs10" class="pjs" style="font-size: 10px; display:inline-block;">Refined Essentials. Relaxed Silhouettes.</div><br>
    <div id="pjs10_5" class="pjs" style="font-size: 10.5px; display:inline-block;">Refined Essentials. Relaxed Silhouettes.</div><br>
    <div id="pjs11" class="pjs" style="font-size: 11px; display:inline-block;">Refined Essentials. Relaxed Silhouettes.</div><br>
    <div id="pjs11_5" class="pjs" style="font-size: 11.5px; display:inline-block;">Refined Essentials. Relaxed Silhouettes.</div><br>
    <div id="pjs12" class="pjs" style="font-size: 12px; display:inline-block;">Refined Essentials. Relaxed Silhouettes.</div><br>
    <div id="pjs_w" class="pjs" style="font-size: 11px; display:inline-block;">Modern Silhouettes, Effortless Layers And</div><br>

    <h3>Inter</h3>
    <div id="int10" class="inter" style="font-size: 10px; display:inline-block;">Refined Essentials. Relaxed Silhouettes.</div><br>
    <div id="int10_5" class="inter" style="font-size: 10.5px; display:inline-block;">Refined Essentials. Relaxed Silhouettes.</div><br>
    <div id="int11" class="inter" style="font-size: 11px; display:inline-block;">Refined Essentials. Relaxed Silhouettes.</div><br>
    <div id="int11_5" class="inter" style="font-size: 11.5px; display:inline-block;">Refined Essentials. Relaxed Silhouettes.</div><br>
    <div id="int12" class="inter" style="font-size: 12px; display:inline-block;">Refined Essentials. Relaxed Silhouettes.</div><br>
    <div id="int_w" class="inter" style="font-size: 11px; display:inline-block;">Modern Silhouettes, Effortless Layers And</div><br>
  </body>
  </html>
  `;
  
  await page.setContent(html, { waitUntil: 'load' });
  await new Promise(r => setTimeout(r, 1000));
  
  const measurements = await page.evaluate(() => {
    const ids = ['pjs10', 'pjs10_5', 'pjs11', 'pjs11_5', 'pjs12', 'pjs_w', 'int10', 'int10_5', 'int11', 'int11_5', 'int12', 'int_w'];
    const res = {};
    for (const id of ids) {
      res[id] = Math.round(document.getElementById(id).getBoundingClientRect().width);
    }
    return res;
  });
  
  console.log('Measurements:', measurements);
  await browser.close();
})();
