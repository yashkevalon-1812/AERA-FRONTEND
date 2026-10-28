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
    const fonts = ['"Cormorant Garamond"', '"Playfair Display"', '"Inika"', '"Inter"', '"Plus Jakarta Sans"'];
    const sizes = [10.5, 11.0, 11.5, 12.0, 12.5, 13.0, 13.5, 14.0];
    const trackings = ['0.02em', '0.04em', '0.05em', '0.06em', '0.08em', '0.1em', '0.12em'];
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

    // Targets in Ref for Row 2:
    // ABOUT: 43px
    // HELP: 29px
    // CONTACT: 60px
    // COLLECTION: 79px
    // SHOP GUIDE: 73px
    const results = [];
    for (const font of fonts) {
      for (const size of sizes) {
        for (const track of trackings) {
          for (const weight of weights) {
            const w0 = testItem(font, size, track, weight, 'ABOUT');
            const w1 = testItem(font, size, track, weight, 'HELP');
            const w2 = testItem(font, size, track, weight, 'CONTACT');
            const w3 = testItem(font, size, track, weight, 'COLLECTION');
            const w4 = testItem(font, size, track, weight, 'SHOP GUIDE');
            const diff = Math.abs(w0 - 43) + Math.abs(w1 - 29) + Math.abs(w2 - 60) + Math.abs(w3 - 79) + Math.abs(w4 - 73);
            results.push({
              font, size, track, weight,
              w0: Math.round(w0 * 10) / 10,
              w1: Math.round(w1 * 10) / 10,
              w2: Math.round(w2 * 10) / 10,
              w3: Math.round(w3 * 10) / 10,
              w4: Math.round(w4 * 10) / 10,
              diff: Math.round(diff * 10) / 10
            });
          }
        }
      }
    }

    results.sort((a, b) => a.diff - b.diff);
    return results.slice(0, 10);
  });

  console.log('Top Row 2 configurations matching reference widths:');
  console.log(JSON.stringify(bestConfigs, null, 2));

  await browser.close();
})();
