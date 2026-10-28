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

  const best = await page.evaluate(() => {
    const fonts = ['"Inter"', '"Plus Jakarta Sans"', '"Poppins"'];
    const sizes = [6.0, 6.5, 7.0, 7.5, 8.0];
    const trackings = ['0.04em', '0.06em', '0.08em', '0.1em', '0.12em', '0.15em'];
    const weights = [400, 500];

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

    // 1. Legal: PRIVACY (32px), TERMS (25px), RETURNS (33px)
    const legalResults = [];
    for (const font of fonts) {
      for (const size of sizes) {
        for (const track of trackings) {
          for (const weight of weights) {
            const w0 = testItem(font, size, track, weight, 'PRIVACY');
            const w1 = testItem(font, size, track, weight, 'TERMS');
            const w2 = testItem(font, size, track, weight, 'RETURNS');
            const diff = Math.abs(w0 - 32) + Math.abs(w1 - 25) + Math.abs(w2 - 33);
            legalResults.push({
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
    legalResults.sort((a, b) => a.diff - b.diff);

    // 2. Copyright: '© 2026 BRAND NAME' or '© 2025 BRAND NAME' -> target width 79px
    const copyResults = [];
    for (const font of fonts) {
      for (const size of [6.0, 6.5, 7.0, 7.5, 8.0, 8.5]) {
        for (const track of ['0.05em', '0.08em', '0.1em', '0.12em', '0.15em', '0.18em', '0.2em']) {
          for (const weight of [400, 500]) {
            for (const text of ['© 2026 BRAND NAME', '© 2025 BRAND NAME']) {
              const w = testItem(font, size, track, weight, text);
              const diff = Math.abs(w - 79);
              copyResults.push({
                font, size, track, weight, text,
                w: Math.round(w * 10) / 10,
                diff: Math.round(diff * 10) / 10
              });
            }
          }
        }
      }
    }
    copyResults.sort((a, b) => a.diff - b.diff);

    return { legal: legalResults.slice(0, 5), copyright: copyResults.slice(0, 5) };
  });

  console.log('Best Legal:', JSON.stringify(best.legal, null, 2));
  console.log('Best Copyright:', JSON.stringify(best.copyright, null, 2));

  await browser.close();
})();
