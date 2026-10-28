const puppeteer = require('puppeteer-core');
const fs = require('fs');

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
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap" rel="stylesheet">
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body { width: 1024px; height: 400px; display: flex; overflow: hidden; }
      .card { position: relative; width: 512px; height: 400px; overflow: hidden; }
      .left-bg { background-color: #EAECEE; }
      .right-bg { background-color: #B2C3D5; }
      .serif { font-family: 'Cormorant Garamond', Georgia, serif; }
      .sans { font-family: 'Plus Jakarta Sans', sans-serif; }
    </style>
  </head>
  <body>
    <!-- LEFT -->
    <div class="card left-bg">
      <p class="sans" style="position:absolute; top:113.5px; left:44px; font-size:8px; font-weight:500; text-transform:uppercase; color:#615249; letter-spacing:0.04em; line-height:1;">MEN'S EDIT</p>
      
      <h3 class="serif" style="position:absolute; top:134px; left:44px; font-size:34px; font-weight:500; text-transform:uppercase; color:#615249; line-height:1; letter-spacing:0px; white-space:nowrap;">THE MODERN MAN</h3>
      
      <div class="sans" style="position:absolute; top:188px; left:44px; font-size:10.5px; font-weight:400; color:#615249; line-height:1.36;">
        <p>Refined Essentials. Relaxed Silhouettes.</p>
        <p>Made For Every Day.</p>
      </div>
      
      <div style="position:absolute; top:230.5px; left:44px; display:flex; align-items:baseline; color:#615249;">
        <span class="serif" style="font-size:24px; font-weight:500; line-height:1;">20% OFF</span>
        <span class="serif" style="font-size:10.5px; font-weight:500; text-transform:uppercase; letter-spacing:0.1em; line-height:1; margin-left:8px;">SELECTED STYLES</span>
      </div>
      
      <div style="position:absolute; top:268px; left:44px; width:16.5px; height:16.5px; border-radius:50%; border:1px solid #615249; display:flex; align-items:center; justify-content:center; color:#615249;">
        <svg viewBox="0 0 16 16" fill="none" style="width:8px; height:8px; stroke:currentColor; stroke-width:1.4;">
          <path d="M3 8H13M9.5 4.5L13 8L9.5 11.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>

    <!-- RIGHT -->
    <div class="card right-bg">
      <p class="sans" style="position:absolute; top:93.5px; left:44px; font-size:8px; font-weight:500; text-transform:uppercase; color:#615249; letter-spacing:0.04em; line-height:1;">WOMEN'S EDIT</p>
      
      <h3 class="serif" style="position:absolute; top:114px; left:44px; font-size:34px; font-weight:500; text-transform:uppercase; color:#615249; line-height:1; letter-spacing:0px; white-space:nowrap;">THE NEW</h3>
      <h3 class="serif" style="position:absolute; top:156px; left:44px; font-size:34px; font-weight:500; text-transform:uppercase; color:#615249; line-height:1; letter-spacing:0px; white-space:nowrap;">FEMININE</h3>
      
      <div class="sans" style="position:absolute; top:207px; left:44px; font-size:10.5px; font-weight:400; color:#615249; line-height:1.36;">
        <p>Modern Silhouettes, Effortless Layers And</p>
        <p>Pieces Designed To Be Remembered.</p>
      </div>
      
      <div style="position:absolute; top:250px; left:44px; display:flex; align-items:baseline; color:#615249;">
        <span class="serif" style="font-size:24px; font-weight:500; line-height:1;">20% OFF</span>
        <span class="serif" style="font-size:10.5px; font-weight:500; text-transform:uppercase; letter-spacing:0.1em; line-height:1; margin-left:8px;">SELECTED STYLES</span>
      </div>
      
      <div style="position:absolute; top:289px; left:44px; width:16.5px; height:16.5px; border-radius:50%; border:1px solid #615249; display:flex; align-items:center; justify-content:center; color:#615249;">
        <svg viewBox="0 0 16 16" fill="none" style="width:8px; height:8px; stroke:currentColor; stroke-width:1.4;">
          <path d="M3 8H13M9.5 4.5L13 8L9.5 11.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
  </body>
  </html>
  `;

  await page.setContent(html, { waitUntil: 'load' });
  await new Promise(r => setTimeout(r, 800));

  await page.screenshot({ path: 'C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/harness_test_v2.png' });
  console.log('Saved harness_test_v2.png');
  await browser.close();
})();
