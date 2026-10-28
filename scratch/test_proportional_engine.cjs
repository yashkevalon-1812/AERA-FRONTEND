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
      .card { 
        position: relative; 
        width: 512px; 
        height: 400px; 
        overflow: hidden; 
        container-type: inline-size;
      }
      .left-bg { background-color: #EAECEE; }
      .right-bg { background-color: #B2C3D5; }
      .serif { font-family: 'Cormorant Garamond', Georgia, serif; }
      .sans { font-family: 'Plus Jakarta Sans', sans-serif; }
    </style>
  </head>
  <body>
    <!-- LEFT -->
    <div class="card left-bg">
      <img src="file:///c:/Users/divye/Desktop/Kevalon/AERA/AERA-FRONTEND/src/assets/dual-banners/men.jpg" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:right;" />
      
      <p class="sans" style="position:absolute; top:28.50%; left:8.59%; font-size:1.5625cqw; font-weight:500; text-transform:uppercase; color:#615249; letter-spacing:0.06em; line-height:1;">MEN'S EDIT</p>
      
      <h3 class="serif" style="position:absolute; top:33.50%; left:8.59%; font-size:6.64cqw; font-weight:500; text-transform:uppercase; color:#615249; line-height:1; letter-spacing:0px; white-space:nowrap;">THE MODERN MAN</h3>
      
      <div class="sans" style="position:absolute; top:47.00%; left:8.59%; font-size:2.05cqw; font-weight:400; color:#615249; line-height:1.38;">
        <p>Refined Essentials. Relaxed Silhouettes.</p>
        <p>Made For Every Day.</p>
      </div>
      
      <div style="position:absolute; top:57.75%; left:8.59%; display:flex; align-items:baseline; color:#615249; line-height:1;">
        <span class="serif" style="font-size:4.69cqw; font-weight:500; line-height:1;">20% OFF</span>
        <span class="serif" style="font-size:2.05cqw; font-weight:500; text-transform:uppercase; letter-spacing:0.1em; line-height:1; margin-left:0.5em;">SELECTED STYLES</span>
      </div>
      
      <div style="position:absolute; top:67.00%; left:8.59%; width:3.125cqw; height:3.125cqw; border-radius:50%; border:1px solid #615249; display:flex; align-items:center; justify-content:center; color:#615249;">
        <svg viewBox="0 0 16 16" fill="none" style="width:1.56cqw; height:1.56cqw; stroke:currentColor; stroke-width:1.4;">
          <path d="M3 8H13M9.5 4.5L13 8L9.5 11.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>

    <!-- RIGHT -->
    <div class="card right-bg">
      <img src="file:///c:/Users/divye/Desktop/Kevalon/AERA/AERA-FRONTEND/src/assets/dual-banners/women.jpg" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:right;" />
      
      <p class="sans" style="position:absolute; top:23.50%; left:8.59%; font-size:1.5625cqw; font-weight:500; text-transform:uppercase; color:#615249; letter-spacing:0.06em; line-height:1;">WOMEN'S EDIT</p>
      
      <h3 class="serif" style="position:absolute; top:28.50%; left:8.59%; font-size:6.64cqw; font-weight:500; text-transform:uppercase; color:#615249; line-height:1.235; letter-spacing:0px; white-space:nowrap;">
        THE NEW<br />FEMININE
      </h3>
      
      <div class="sans" style="position:absolute; top:51.75%; left:8.59%; font-size:2.05cqw; font-weight:400; color:#615249; line-height:1.38;">
        <p>Modern Silhouettes, Effortless Layers And</p>
        <p>Pieces Designed To Be Remembered.</p>
      </div>
      
      <div style="position:absolute; top:62.50%; left:8.59%; display:flex; align-items:baseline; color:#615249; line-height:1;">
        <span class="serif" style="font-size:4.69cqw; font-weight:500; line-height:1;">20% OFF</span>
        <span class="serif" style="font-size:2.05cqw; font-weight:500; text-transform:uppercase; letter-spacing:0.1em; line-height:1; margin-left:0.5em;">SELECTED STYLES</span>
      </div>
      
      <div style="position:absolute; top:72.25%; left:8.59%; width:3.125cqw; height:3.125cqw; border-radius:50%; border:1px solid #615249; display:flex; align-items:center; justify-content:center; color:#615249;">
        <svg viewBox="0 0 16 16" fill="none" style="width:1.56cqw; height:1.56cqw; stroke:currentColor; stroke-width:1.4;">
          <path d="M3 8H13M9.5 4.5L13 8L9.5 11.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
  </body>
  </html>
  `;

  await page.setContent(html, { waitUntil: 'load' });
  await new Promise(r => setTimeout(r, 1000));

  await page.screenshot({ path: 'C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/cqw_1024_test.png' });
  console.log('Saved cqw_1024_test.png');

  // Test at 1536px
  await page.setViewport({ width: 1536, height: 600, deviceScaleFactor: 1 });
  await page.evaluate(() => {
    document.body.style.width = '1536px';
    document.body.style.height = '600px';
    document.querySelectorAll('.card').forEach(c => {
      c.style.width = '768px';
      c.style.height = '600px';
    });
  });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: 'C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/cqw_1536_test.png' });
  console.log('Saved cqw_1536_test.png');

  // Test at 1920px
  await page.setViewport({ width: 1920, height: 750, deviceScaleFactor: 1 });
  await page.evaluate(() => {
    document.body.style.width = '1920px';
    document.body.style.height = '750px';
    document.querySelectorAll('.card').forEach(c => {
      c.style.width = '960px';
      c.style.height = '750px';
    });
  });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: 'C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/cqw_1920_test.png' });
  console.log('Saved cqw_1920_test.png');

  await browser.close();
})();
