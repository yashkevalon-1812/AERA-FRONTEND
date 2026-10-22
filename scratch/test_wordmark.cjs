const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1126 });
  await page.setContent(`
    <!DOCTYPE html>
    <html>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500&display=swap" rel="stylesheet">
      <style>
        body { margin: 0; background: #F8F5E8; overflow: hidden; }
        .hero { width: 1920px; height: 1126px; position: relative; }
        .wordmark-container {
          position: absolute;
          top: 140px;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          text-align: center;
          pointer-events: none;
        }
        .wordmark {
          display: inline-block;
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 500;
          font-style: normal;
          font-size: 400px;
          line-height: 100%;
          letter-spacing: 143px;
          text-transform: uppercase;
          color: #E8E2D0;
          opacity: 0.85;
          white-space: nowrap;
          padding-left: 143px; /* offsets trailing letter-spacing to perfectly center */
        }
      </style>
    </head>
    <body>
      <div class="hero">
        <div class="wordmark-container">
          <span class="wordmark">AERA</span>
        </div>
      </div>
    </body>
    </html>
  `);
  await page.evaluateHandle('document.fonts.ready');
  const dims = await page.evaluate(() => {
    const el = document.querySelector('.wordmark');
    const container = document.querySelector('.wordmark-container');
    const rect = el.getBoundingClientRect();
    return {
      rect: { left: rect.left, right: rect.right, width: rect.width, height: rect.height, top: rect.top },
      centerDiff: (rect.left + rect.right) / 2 - 960
    };
  });
  console.log('Dims:', dims);
  await page.screenshot({ path: 'C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/scratch/test_wordmark.png' });
  await browser.close();
})();
