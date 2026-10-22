const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1239 });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });

  const specs = await page.evaluate(() => {
    const hero = document.querySelector('section');
    const wordmarkSpan = hero.querySelector('div[style*="position: absolute"] span');
    const heroImgContainer = hero.querySelector('div[style*="1273px"]');
    const heroImg = hero.querySelector('img');
    const navbar = document.querySelector('header');
    const logo = navbar.querySelector('button[style*="96px"]');
    const logoSpan = logo.querySelector('span');

    const wmStyle = wordmarkSpan ? window.getComputedStyle(wordmarkSpan) : {};

    return {
      backgroundWordmark: {
        fontFamily: wmStyle.fontFamily,
        fontWeight: wmStyle.fontWeight,
        fontSize: wmStyle.fontSize,
        lineHeight: wmStyle.lineHeight,
        letterSpacing: wmStyle.letterSpacing,
        textTransform: wmStyle.textTransform,
        offsetWidth: wordmarkSpan ? wordmarkSpan.offsetWidth : null,
        offsetHeight: wordmarkSpan ? wordmarkSpan.offsetHeight : null,
      },
      heroSection: {
        inlineStyle: hero.getAttribute('style'),
        offsetWidth: hero.offsetWidth,
        offsetHeight: hero.offsetHeight,
      },
      heroImageContainer: {
        offsetWidth: heroImgContainer ? heroImgContainer.offsetWidth : null,
        offsetHeight: heroImgContainer ? heroImgContainer.offsetHeight : null,
        computedTop: heroImgContainer ? window.getComputedStyle(heroImgContainer).top : null,
        computedLeft: heroImgContainer ? window.getComputedStyle(heroImgContainer).left : null,
      },
      heroImg: {
        offsetWidth: heroImg ? heroImg.offsetWidth : null,
        offsetHeight: heroImg ? heroImg.offsetHeight : null,
        naturalWidth: heroImg ? heroImg.naturalWidth : null,
        naturalHeight: heroImg ? heroImg.naturalHeight : null
      },
      navbar: {
        offsetWidth: navbar.offsetWidth,
        offsetHeight: navbar.offsetHeight,
      },
      logo: {
        offsetWidth: logo.offsetWidth,
        offsetHeight: logo.offsetHeight,
        fontFamily: window.getComputedStyle(logoSpan).fontFamily,
        fontSize: window.getComputedStyle(logoSpan).fontSize,
        lineHeight: window.getComputedStyle(logoSpan).lineHeight,
      }
    };
  });

  console.log('=== EXACT MEASURED SPECS ===');
  console.log(JSON.stringify(specs, null, 2));

  await page.screenshot({ path: 'C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/hero_wordmark_verified.png' });
  await browser.close();
})();
