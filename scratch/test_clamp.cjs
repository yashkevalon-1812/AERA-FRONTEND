const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  
  for (const width of [1024, 1280, 1366, 1440, 1536, 1680, 1920]) {
    await page.setViewport({ width, height: 900, deviceScaleFactor: 1 });
    
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500&display=swap" rel="stylesheet">
      <style>
        body { margin: 0; background: #EAECEE; }
        .banner { width: ${width}px; display: flex; }
        .card { width: ${width/2}px; position: relative; }
        .text {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 500;
          text-transform: uppercase;
          color: #615249;
          line-height: 1;
          letter-spacing: 0px;
          white-space: nowrap;
          font-size: clamp(24px, 2.8vw, 52px);
          position: absolute;
          left: 8.59%;
          top: 34.25%;
        }
      </style>
    </head>
    <body>
      <div class="banner">
        <div class="card">
          <div id="target" class="text">THE MODERN MAN</div>
        </div>
      </div>
    </body>
    </html>
    `;
    
    await page.setContent(html, { waitUntil: 'load' });
    await new Promise(r => setTimeout(r, 400));
    
    const data = await page.evaluate(() => {
      const el = document.getElementById('target');
      const cs = window.getComputedStyle(el);
      const rect = el.getBoundingClientRect();
      return {
        fontSize: cs.fontSize,
        width: Math.round(rect.width),
        left: Math.round(rect.left)
      };
    });
    
    const cardW = width / 2;
    const manHand = cardW * 0.75; // Hand is at ~75% of card
    const textEnd = data.left + data.width;
    const margin = Math.round(manHand - textEnd);
    
    console.log(`Viewport ${width}px: font=${data.fontSize}, textWidth=${data.width}px, textEnd=${textEnd}px, manHand=${Math.round(manHand)}px, margin=${margin}px, ratio=${(data.width/cardW).toFixed(3)}`);
  }
  
  await browser.close();
})();
