const puppeteer = require('puppeteer-core');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 600, height: 600, deviceScaleFactor: 2 });
  
  const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inika:wght@400;700&family=Plus+Jakarta+Sans:wght@300;400;500;600&family=Inter:wght@400;500&display=swap" rel="stylesheet">
    <style>
      body { margin: 20px; background: #EAECEE; color: #615249; }
      .box { margin-bottom: 25px; padding: 10px; background: white; }
      .pjs { font-family: 'Plus Jakarta Sans', sans-serif; }
      .inter { font-family: 'Inter', sans-serif; }
      .inika { font-family: 'Inika', serif; }
      .cormorant { font-family: 'Cormorant Garamond', serif; }
    </style>
  </head>
  <body>
    <div id="pjs_box" class="box pjs" style="font-size: 11px; line-height: 1.4;">
      Refined Essentials. Relaxed Silhouettes.<br>
      Made For Every Day.
    </div>
    <div id="inter_box" class="box inter" style="font-size: 11px; line-height: 1.4;">
      Refined Essentials. Relaxed Silhouettes.<br>
      Made For Every Day.
    </div>
    <div id="inika_box" class="box inika" style="font-size: 11px; line-height: 1.4;">
      Refined Essentials. Relaxed Silhouettes.<br>
      Made For Every Day.
    </div>
  </body>
  </html>
  `;
  
  await page.setContent(html, { waitUntil: 'load' });
  await new Promise(r => setTimeout(r, 1200));
  
  for (const id of ['pjs_box', 'inter_box', 'inika_box']) {
    const el = await page.$('#' + id);
    await el.screenshot({ path: `C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/${id}.png` });
  }
  
  await browser.close();
  console.log('Saved font candidate screenshots');
})();
