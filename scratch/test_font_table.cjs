const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  
  const testHtml = `
  <!DOCTYPE html>
  <html>
  <head>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500&display=swap" rel="stylesheet">
    <style>
      body { margin: 0; font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 500; text-transform: uppercase; }
      .line { line-height: 1; letter-spacing: 0px; white-space: nowrap; display: inline-block; }
    </style>
  </head>
  <body>
    ${[24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 60, 64].map(s => `
      <div id="s${s}" class="line" style="font-size: ${s}px;">THE MODERN MAN</div>
    `).join('')}
  </body>
  </html>
  `;
  
  await page.setContent(testHtml, { waitUntil: 'load' });
  await new Promise(r => setTimeout(r, 1000));
  
  const results = await page.evaluate(() => {
    return [24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 60, 64].map(s => {
      const el = document.getElementById('s' + s);
      const rect = el.getBoundingClientRect();
      return { size: s, width: Math.round(rect.width), height: Math.round(rect.height) };
    });
  });
  
  console.log('Font size table:', results);
  await browser.close();
})();
