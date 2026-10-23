const puppeteer = require('puppeteer-core');
const fs = require('fs');

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
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&display=swap">
      <style>
        body { background: #97173a; color: #b1bed1; padding: 20px; }
        .row { margin-bottom: 25px; }
        .label { font-family: sans-serif; font-size: 12px; color: white; margin-bottom: 4px; }
        .t { font-family: 'Cormorant Garamond'; font-size: 34px; line-height: 0.95; text-transform: uppercase; letter-spacing: -0.01em; }
      </style>
    </head>
    <body>
      <div class="row">
        <div class="label">Cormorant Garamond 500</div>
        <div class="t" style="font-weight: 500;">THE NEW<br>SEASON</div>
      </div>
      <div class="row">
        <div class="label">Cormorant Garamond 600</div>
        <div class="t" style="font-weight: 600;">THE NEW<br>SEASON</div>
      </div>
      <div class="row">
        <div class="label">Cormorant Garamond 700</div>
        <div class="t" style="font-weight: 700;">THE NEW<br>SEASON</div>
      </div>
    </body>
    </html>
  `;
  await page.setContent(html, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: 'C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/cg_weights.png' });
  await browser.close();
  console.log('Saved cg_weights.png');
})();
