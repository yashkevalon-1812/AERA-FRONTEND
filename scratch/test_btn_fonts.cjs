const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 800, height: 600, deviceScaleFactor: 2 });
  
  await page.setContent(`
    <!DOCTYPE html>
    <html>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600&family=Poppins:wght@400;500&family=Michroma&display=swap" rel="stylesheet">
      <style>
        body { margin: 20px; background: #222; color: #fff; font-size: 16px; }
        .row { display: flex; align-items: center; gap: 20px; margin-bottom: 15px; }
        .label { width: 180px; font-family: monospace; font-size: 12px; }
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #F5EFE3;
          color: #1F1D1B;
          padding: 8px 16px;
          border-radius: 6px;
          text-transform: uppercase;
        }
        .btn svg { width: 14px; height: 14px; }
      </style>
    </head>
    <body>
      <div class="row">
        <div class="label">Plus Jakarta Sans 500 10px:</div>
        <div class="btn" style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 10px; font-weight: 500; letter-spacing: 0.06em;">
          <span>DISCOVER OUR STORY</span>
          <svg viewBox="0 0 16 16" fill="none"><path d="M2.5 8H13.5M13.5 8L9 3.5M13.5 8L9 12.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
      </div>
      <div class="row">
        <div class="label">Inter 500 10px:</div>
        <div class="btn" style="font-family: 'Inter', sans-serif; font-size: 10px; font-weight: 500; letter-spacing: 0.06em;">
          <span>DISCOVER OUR STORY</span>
          <svg viewBox="0 0 16 16" fill="none"><path d="M2.5 8H13.5M13.5 8L9 3.5M13.5 8L9 12.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
      </div>
      <div class="row">
        <div class="label">Cormorant Garamond 600 13px:</div>
        <div class="btn" style="font-family: 'Cormorant Garamond', serif; font-size: 13px; font-weight: 600; letter-spacing: 0.08em;">
          <span>DISCOVER OUR STORY</span>
          <svg viewBox="0 0 16 16" fill="none"><path d="M2.5 8H13.5M13.5 8L9 3.5M13.5 8L9 12.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
      </div>
      <div class="row">
        <div class="label">Michroma 400 9px:</div>
        <div class="btn" style="font-family: 'Michroma', sans-serif; font-size: 9px; font-weight: 400; letter-spacing: 0.04em;">
          <span>DISCOVER OUR STORY</span>
          <svg viewBox="0 0 16 16" fill="none"><path d="M2.5 8H13.5M13.5 8L9 3.5M13.5 8L9 12.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
      </div>
    </body>
    </html>
  `);

  await page.evaluateHandle('document.fonts.ready');
  await page.screenshot({ path: 'C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/button_font_candidates.png' });
  await browser.close();
  console.log('Saved button_font_candidates.png!');
})();
