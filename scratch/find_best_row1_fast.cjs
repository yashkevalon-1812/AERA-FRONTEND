const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: true,
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1024, height: 900 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await page.evaluateHandle('document.fonts.ready');

  const bestConfigs = await page.evaluate(() => {
    const fonts = ['"Plus Jakarta Sans"', '"Inter"', '"Poppins"', '"Cormorant Garamond"'];
    const sizes = [7.5, 8.0, 8.5, 9.0, 9.5, 10.0, 10.5, 11.0, 11.5, 12.0];
    const trackings = ['0.02em', '0.05em', '0.08em', '0.1em', '0.12em', '0.15em', '0.18em', '0.2em', '0.25em'];
    const weights = [400, 500, 600];

    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.visibility = 'hidden';
    container.style.whiteSpace = 'nowrap';
    document.body.appendChild(container);

    const testItem = (font, size, track, weight, text) => {
      container.style.fontFamily = font;
      container.style.fontSize = size + 'px';
      container.style.letterSpacing = track;
      container.style.fontWeight = weight;
      container.style.textTransform = 'uppercase';
      container.innerText = text;
      const r = container.getBoundingClientRect();
      return r.width;
    };

    // Target in Ref for Row 1:
    // 'NEW COLLECTIONS': 112px
    // 'EVERYDAY ESSENTIALS': 136px
    // 'MODERN CLASSICS': 111px
    const results = [];
    for (const font of fonts) {
      for (const size of sizes) {
        for (const track of trackings) {
          for (const weight of weights) {
            const w0 = testItem(font, size, track, weight, 'NEW COLLECTIONS');
            const w1 = testItem(font, size, track, weight, 'EVERYDAY ESSENTIALS');
            const w2 = testItem(font, size, track, weight, 'MODERN CLASSICS');
            const diff = Math.abs(w0 - 112) + Math.abs(w1 - 136) + Math.abs(w2 - 111);
            results.push({
              font, size, track, weight,
              w0: Math.round(w0 * 10) / 10,
              w1: Math.round(w1 * 10) / 10,
              w2: Math.round(w2 * 10) / 10,
              diff: Math.round(diff * 10) / 10
            });
          }
        }
      }
    }

    results.sort((a, b) => a.diff - b.diff);
    return results.slice(0, 10);
  });

  console.log('Top Row 1 configurations matching reference widths:');
  console.log(JSON.stringify(bestConfigs, null, 2));

  await browser.close();
})();
