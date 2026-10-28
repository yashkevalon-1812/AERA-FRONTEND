const puppeteer = require('puppeteer-core');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 800, height: 800, deviceScaleFactor: 1 });

  const fonts = [
    { name: 'Plus Jakarta Sans 400 11px', family: 'Plus Jakarta Sans', weight: 400, size: '11px', ls: '0' },
    { name: 'Plus Jakarta Sans 400 10.5px', family: 'Plus Jakarta Sans', weight: 400, size: '10.5px', ls: '0.01em' },
    { name: 'Plus Jakarta Sans 500 10px', family: 'Plus Jakarta Sans', weight: 500, size: '10px', ls: '0' },
    { name: 'Inter 400 10.5px', family: 'Inter', weight: 400, size: '10.5px', ls: '0' },
    { name: 'Inter 400 11px', family: 'Inter', weight: 400, size: '11px', ls: '0' },
    { name: 'Inter 500 10px', family: 'Inter', weight: 500, size: '10px', ls: '0' },
    { name: 'Poppins 400 10px', family: 'Poppins', weight: 400, size: '10px', ls: '0' },
    { name: 'Arial 400 10.5px', family: 'Arial', weight: 400, size: '10.5px', ls: '0' },
  ];

  await page.setContent(`
    <!DOCTYPE html>
    <html>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@300;400;500;600&family=Poppins:wght@400;500&display=swap" rel="stylesheet">
      <style>
        body { margin: 0; background: #221c17; color: #FAF8F5; padding: 20px; }
        .test-box {
          margin-bottom: 20px;
          display: inline-block;
        }
        .p-text {
          line-height: 1.28;
          white-space: nowrap;
        }
      </style>
    </head>
    <body>
      ${fonts.map((f, i) => `
        <div id="test-${i}" class="test-box">
          <div class="p-text" style="font-family: '${f.family}', sans-serif; font-weight: ${f.weight}; font-size: ${f.size}; letter-spacing: ${f.ls};">
            Pieces Designed To Become Part Of The Way<br>You Move, Live And Express Yourself.
          </div>
        </div>
      `).join('')}
    </body>
    </html>
  `);

  await page.evaluateHandle('document.fonts.ready');
  await new Promise(r => setTimeout(r, 600));

  for (let i = 0; i < fonts.length; i++) {
    const el = await page.$(`#test-${i}`);
    await el.screenshot({ path: `C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/sub_cand_${i}.png` });
  }

  await browser.close();
  console.log('Saved all subtitle candidates!');
})();
