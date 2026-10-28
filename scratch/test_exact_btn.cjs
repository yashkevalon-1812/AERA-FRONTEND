const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 600, height: 400, deviceScaleFactor: 1 });

  await page.setContent(`
    <!DOCTYPE html>
    <html>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600&display=swap" rel="stylesheet">
      <style>
        body { margin: 0; background: #221c17; padding: 20px; }
        .btn {
          display: inline-flex;
          align-items: center;
          height: 31px;
          background: #F5EFE3;
          color: #1F1D1B;
          border-radius: 6px;
          box-sizing: border-box;
          line-height: 1;
          white-space: nowrap;
          text-transform: uppercase;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 500;
          font-size: 8.8px;
          letter-spacing: 0.03em;
          gap: 7px;
          padding-left: 13px;
          padding-right: 12px;
        }
        .btn svg {
          width: 10px;
          height: 10px;
        }
      </style>
    </head>
    <body>
      <div id="btn-exact" class="btn">
        <span>DISCOVER OUR STORY</span>
        <svg viewBox="0 0 16 16" fill="none">
          <path d="M2.5 8H13.5M9 3.5L13.5 8L9 12.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </body>
    </html>
  `);

  await page.evaluateHandle('document.fonts.ready');
  const el = await page.$('#btn-exact');
  const r = await el.boundingBox();
  console.log(`Rendered exact button: width = ${r.width}, height = ${r.height}`);
  await el.screenshot({ path: 'C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/test_exact_btn.png' });
  await browser.close();
})();
