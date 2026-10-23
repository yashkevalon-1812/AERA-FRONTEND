const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });

  const info = await page.evaluate(() => {
    const hero = document.querySelector('section');
    const imgDiv = hero.querySelector('div.z-10');
    const computed = window.getComputedStyle(imgDiv);
    return {
      offsetParent: imgDiv.offsetParent ? imgDiv.offsetParent.tagName : null,
      heroPosition: window.getComputedStyle(hero).position,
      imgDivBottom: computed.bottom,
      imgDivPosition: computed.position,
      imgDivHeight: computed.height,
      heroHeight: window.getComputedStyle(hero).height,
      heroPadding: {
        top: window.getComputedStyle(hero).paddingTop,
        bottom: window.getComputedStyle(hero).paddingBottom
      }
    };
  });

  console.log(JSON.stringify(info, null, 2));
  await browser.close();
})();
