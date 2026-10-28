const puppeteer = require('puppeteer-core');

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
      <link href="https://fonts.googleapis.com/css2?family=Michroma&family=Syncopate:wght@400;700&family=Syne:wght@700;800&family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet">
    </head>
    <body style="background:#333; color:white; padding:20px;">
      <div id="michroma" style="font-family:'Michroma', sans-serif; font-size:24px; text-transform:uppercase; line-height:1.2;">
        WEAR WHAT<br>MOVES YOU
      </div>
      <div id="syncopate" style="font-family:'Syncopate', sans-serif; font-size:20px; font-weight:700; text-transform:uppercase; line-height:1.2; margin-top:20px;">
        WEAR WHAT<br>MOVES YOU
      </div>
      <div id="syne" style="font-family:'Syne', sans-serif; font-size:24px; font-weight:800; text-transform:uppercase; line-height:1.2; margin-top:20px;">
        WEAR WHAT<br>MOVES YOU
      </div>
    </body>
    </html>
  `;
  await page.setContent(html, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: 'C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/font_candidates.png' });
  console.log('Saved font_candidates.png');
  await browser.close();
})();
