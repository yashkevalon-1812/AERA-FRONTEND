const puppeteer = require('puppeteer-core');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: true,
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1024, height: 358, deviceScaleFactor: 1 });

  // Test matrix for Row 1
  const fonts = ['"Plus Jakarta Sans"', '"Inter"', '"Poppins"'];
  const sizes = [8.5, 9.0, 9.5, 10.0, 10.5, 11.0];
  const trackings = ['0.05em', '0.08em', '0.1em', '0.12em', '0.15em', '0.18em', '0.2em'];
  const weights = [400, 500, 600];

  const results = [];

  for (const font of fonts) {
    for (const size of sizes) {
      for (const track of trackings) {
        for (const weight of [500]) {
          const html = `
<!DOCTYPE html>
<html>
<head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inika:wght@400;700&family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  body { margin: 0; background: #615249; width: 1024px; height: 358px; overflow: hidden; }
  .row1 {
    position: absolute;
    top: 114px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 68px;
    white-space: nowrap;
    font-family: ${font}, sans-serif;
    font-size: ${size}px;
    font-weight: ${weight};
    letter-spacing: ${track};
    color: #C7BEB5;
    text-transform: uppercase;
  }
</style>
</head>
<body>
  <div class="row1">
    <span>NEW COLLECTIONS</span>
    <span>EVERYDAY ESSENTIALS</span>
    <span>MODERN CLASSICS</span>
  </div>
</body>
</html>
          `;
          await page.setContent(html, { waitUntil: 'networkidle0' });
          await page.evaluateHandle('document.fonts.ready');
          
          const metrics = await page.evaluate(() => {
            const spans = Array.from(document.querySelectorAll('.row1 span'));
            const r0 = spans[0].getBoundingClientRect();
            const r1 = spans[1].getBoundingClientRect();
            const r2 = spans[2].getBoundingClientRect();
            return {
              w0: Math.round(r0.width * 10) / 10,
              w1: Math.round(r1.width * 10) / 10,
              w2: Math.round(r2.width * 10) / 10,
              left0: Math.round(r0.left * 10) / 10,
              right2: Math.round(r2.right * 10) / 10,
              totalSpan: Math.round((r2.right - r0.left) * 10) / 10
            };
          });

          // Target in Ref: w0 ~ 112, w1 ~ 136, w2 ~ 111, left0 ~ 266, right2 ~ 758, totalSpan ~ 492
          const error = Math.abs(metrics.w0 - 112) + Math.abs(metrics.w1 - 136) + Math.abs(metrics.w2 - 111) + Math.abs(metrics.totalSpan - 492);
          results.push({ font, size, track, weight, ...metrics, error });
        }
      }
    }
  }

  results.sort((a, b) => a.error - b.error);
  console.log('Top 10 candidates for Row 1:');
  console.log(JSON.stringify(results.slice(0, 10), null, 2));

  await browser.close();
})();
