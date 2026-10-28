const path = require('path');
const puppeteer = require(path.resolve(__dirname, '../node_modules/puppeteer-core'));

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.goto('http://localhost:5173/', { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 1000));

  const measurements = await page.evaluate(() => {
    const results = [];
    const fontSizes = [26, 27, 28, 29, 30, 31, 32, 33, 34];
    
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.visibility = 'hidden';
    container.style.top = '-9999px';
    document.body.appendChild(container);

    for (const fs of fontSizes) {
      const el = document.createElement('div');
      el.style.fontFamily = "'Cormorant Garamond', Georgia, serif";
      el.style.fontWeight = '500';
      el.style.fontSize = fs + 'px';
      el.style.lineHeight = '1';
      el.style.letterSpacing = '0px';
      el.style.textTransform = 'uppercase';
      el.style.display = 'inline-block';
      el.innerText = 'THE MODERN MAN';
      container.appendChild(el);

      const rect = el.getBoundingClientRect();
      results.push({ fontSize: fs, width: Math.round(rect.width * 10) / 10, height: Math.round(rect.height * 10) / 10 });
      container.removeChild(el);
    }

    document.body.removeChild(container);
    return results;
  });

  console.log('Measurements (reference width is 216px):');
  console.table(measurements);

  await browser.close();
})();
