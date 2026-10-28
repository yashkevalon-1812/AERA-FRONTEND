const puppeteer = require('puppeteer-core');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1000, height: 1000, deviceScaleFactor: 1 });

  // Variations:
  // Font: Plus Jakarta Sans vs Inter
  // Font-size: 9.2px, 9.5px, 9.8px, 10px
  // Gap: 6px, 7px, 8px
  // Padding: px 13px, 14px, 15px
  // Arrow stroke: 1.2, 1.3, 1.4
  const configs = [
    { id: 0, font: 'Plus Jakarta Sans', weight: 500, size: '9.2px', ls: '0.06em', gap: '7px', pl: '13px', pr: '15px', stroke: 1.2 },
    { id: 1, font: 'Plus Jakarta Sans', weight: 500, size: '9.5px', ls: '0.06em', gap: '7px', pl: '13px', pr: '15px', stroke: 1.3 },
    { id: 2, font: 'Plus Jakarta Sans', weight: 600, size: '9.0px', ls: '0.07em', gap: '8px', pl: '12px', pr: '14px', stroke: 1.3 },
    { id: 3, font: 'Inter', weight: 500, size: '9.2px', ls: '0.06em', gap: '7px', pl: '13px', pr: '15px', stroke: 1.2 },
    { id: 4, font: 'Inter', weight: 500, size: '9.5px', ls: '0.06em', gap: '7px', pl: '13px', pr: '15px', stroke: 1.3 },
    { id: 5, font: 'Inter', weight: 600, size: '9.0px', ls: '0.07em', gap: '8px', pl: '12px', pr: '14px', stroke: 1.3 },
  ];

  await page.setContent(`
    <!DOCTYPE html>
    <html>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
      <style>
        body { margin: 20px; background: #2b1f18; padding: 20px; }
        .wrapper { margin-bottom: 20px; display: inline-block; }
        .btn-box {
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
        }
      </style>
    </head>
    <body>
      ${configs.map(c => `
        <div id="btn-${c.id}" class="wrapper">
          <div class="btn-box" style="
            font-family: '${c.font}', sans-serif;
            font-weight: ${c.weight};
            font-size: ${c.size};
            letter-spacing: ${c.ls};
            gap: ${c.gap};
            padding-left: ${c.pl};
            padding-right: ${c.pr};
          ">
            <span>DISCOVER OUR STORY</span>
            <svg style="width: 11px; height: 11px;" viewBox="0 0 16 16" fill="none">
              <path d="M2.5 8H13.5M9 3.5L13.5 8L9 12.5" stroke="currentColor" stroke-width="${c.stroke}" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      `).join('')}
    </body>
    </html>
  `);

  await page.evaluateHandle('document.fonts.ready');
  await new Promise(r => setTimeout(r, 600));

  for (const c of configs) {
    const el = await page.$(`#btn-${c.id} .btn-box`);
    const r = await el.boundingBox();
    console.log(`Config ${c.id}: width = ${r.width}, height = ${r.height}`);
    await el.screenshot({ path: `C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/btn_cand_${c.id}.png` });
  }

  await browser.close();
  console.log('Saved all button candidates!');
})();
