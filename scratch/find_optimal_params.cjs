const puppeteer = require('puppeteer-core');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1024, height: 400, deviceScaleFactor: 1 });

  // Test harness with exact reference background
  async function testConfig(config) {
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap" rel="stylesheet">
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { width: 1024px; height: 400px; display: flex; overflow: hidden; background: #EAECEE; }
        .card { position: relative; width: 512px; height: 400px; overflow: hidden; }
        .left-bg { background-color: #EAECEE; }
        .right-bg { background-color: #B2C3D5; }
        .serif { font-family: 'Cormorant Garamond', Georgia, serif; }
        .sans { font-family: 'Plus Jakarta Sans', sans-serif; }
      </style>
    </head>
    <body>
      <!-- LEFT -->
      <div class="card left-bg">
        <p class="sans" style="position:absolute; top:${config.l_eye_top}px; left:${config.l_left}px; font-size:${config.l_eye_size}px; font-weight:500; text-transform:uppercase; color:#615249; letter-spacing:${config.l_eye_track}em; line-height:1;">MEN'S EDIT</p>
        <h3 class="serif" style="position:absolute; top:${config.l_head_top}px; left:${config.l_left}px; font-size:${config.l_head_size}px; font-weight:500; text-transform:uppercase; color:#615249; line-height:1; letter-spacing:${config.l_head_track}px; white-space:nowrap;">THE MODERN MAN</h3>
        <div class="sans" style="position:absolute; top:${config.l_sub_top}px; left:${config.l_left}px; font-size:${config.l_sub_size}px; font-weight:400; color:#615249; line-height:${config.l_sub_lh};">
          <p>Refined Essentials. Relaxed Silhouettes.</p>
          <p>Made For Every Day.</p>
        </div>
        <div style="position:absolute; top:${config.l_promo_top}px; left:${config.l_left}px; display:flex; align-items:baseline; color:#615249;">
          <span class="serif" style="font-size:${config.l_disc_size}px; font-weight:500; line-height:1;">20% OFF</span>
          <span class="serif" style="font-size:${config.l_tag_size}px; font-weight:500; text-transform:uppercase; letter-spacing:${config.l_tag_track}em; line-height:1; margin-left:${config.l_tag_ml}px;">SELECTED STYLES</span>
        </div>
        <div style="position:absolute; top:${config.l_btn_top}px; left:${config.l_left}px; width:17px; height:17px; border-radius:50%; border:1px solid #615249; display:flex; align-items:center; justify-content:center; color:#615249;">
          <svg viewBox="0 0 16 16" fill="none" style="width:8px; height:8px; stroke:currentColor; stroke-width:1.4;">
            <path d="M3 8H13M9.5 4.5L13 8L9.5 11.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>

      <!-- RIGHT -->
      <div class="card right-bg">
        <p class="sans" style="position:absolute; top:${config.r_eye_top}px; left:${config.r_left}px; font-size:${config.r_eye_size}px; font-weight:500; text-transform:uppercase; color:#615249; letter-spacing:${config.r_eye_track}em; line-height:1;">WOMEN'S EDIT</p>
        <h3 class="serif" style="position:absolute; top:${config.r_head1_top}px; left:${config.r_left}px; font-size:${config.r_head_size}px; font-weight:500; text-transform:uppercase; color:#615249; line-height:1; letter-spacing:${config.r_head_track}px; white-space:nowrap;">THE NEW</h3>
        <h3 class="serif" style="position:absolute; top:${config.r_head2_top}px; left:${config.r_left}px; font-size:${config.r_head_size}px; font-weight:500; text-transform:uppercase; color:#615249; line-height:1; letter-spacing:${config.r_head_track}px; white-space:nowrap;">FEMININE</h3>
        <div class="sans" style="position:absolute; top:${config.r_sub_top}px; left:${config.r_left}px; font-size:${config.r_sub_size}px; font-weight:400; color:#615249; line-height:${config.r_sub_lh};">
          <p>Modern Silhouettes, Effortless Layers And</p>
          <p>Pieces Designed To Be Remembered.</p>
        </div>
        <div style="position:absolute; top:${config.r_promo_top}px; left:${config.r_left}px; display:flex; align-items:baseline; color:#615249;">
          <span class="serif" style="font-size:${config.r_disc_size}px; font-weight:500; line-height:1;">20% OFF</span>
          <span class="serif" style="font-size:${config.r_tag_size}px; font-weight:500; text-transform:uppercase; letter-spacing:${config.r_tag_track}em; line-height:1; margin-left:${config.r_tag_ml}px;">SELECTED STYLES</span>
        </div>
        <div style="position:absolute; top:${config.r_btn_top}px; left:${config.r_left}px; width:17px; height:17px; border-radius:50%; border:1px solid #615249; display:flex; align-items:center; justify-content:center; color:#615249;">
          <svg viewBox="0 0 16 16" fill="none" style="width:8px; height:8px; stroke:currentColor; stroke-width:1.4;">
            <path d="M3 8H13M9.5 4.5L13 8L9.5 11.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </body>
    </html>
    `;

    await page.setContent(html, { waitUntil: 'load' });
    await new Promise(r => setTimeout(r, 600));

    const path = 'C:/Users/divye/.gemini/antigravity/brain/a40e8476-2329-48c2-8837-b12cf6408663/harness_test.png';
    await page.screenshot({ path });
    return path;
  }

  // Initial target config based on exact pixel coordinates:
  // Left:
  // Eyebrow glyphs: y=114..121. Sans top: 114
  // Headline glyphs: y=137..160. Cormorant top: 134, size: 33.5
  // Subtitle glyphs: y=189..216. Sans top: 188, size: 10.5, lh: 1.35
  // Promo glyphs: y=233..248. Cormorant top: 231, disc_size: 23.5, tag_size: 10.5
  // Button: y=268..284. top: 268
  const baseConfig = {
    l_left: 44,
    l_eye_top: 114,
    l_eye_size: 8,
    l_eye_track: 0.08,
    l_head_top: 133,
    l_head_size: 34,
    l_head_track: 0,
    l_sub_top: 188,
    l_sub_size: 10.5,
    l_sub_lh: 1.36,
    l_promo_top: 231,
    l_disc_size: 24,
    l_tag_size: 10.5,
    l_tag_track: 0.1,
    l_tag_ml: 9,
    l_btn_top: 268,

    r_left: 44,
    r_eye_top: 94,
    r_eye_size: 8,
    r_eye_track: 0.08,
    r_head1_top: 114,
    r_head2_top: 156,
    r_head_size: 34,
    r_head_track: 0,
    r_sub_top: 204,
    r_sub_size: 10.5,
    r_sub_lh: 1.36,
    r_promo_top: 252,
    r_disc_size: 24,
    r_tag_size: 10.5,
    r_tag_track: 0.1,
    r_tag_ml: 9,
    r_btn_top: 289
  };

  await testConfig(baseConfig);
  console.log('Saved harness_test.png');
  await browser.close();
})();
