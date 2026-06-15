const { chromium } = require('playwright');
const path = require('path');

const FILE = 'file:///' + path.resolve('index.html').replace(/\\/g, '/');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
  });
  const page = await context.newPage();
  await page.goto(FILE, { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);

  // scroll through to trigger reveals
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 300) {
      window.scrollTo(0, y);
      await new Promise(r => setTimeout(r, 60));
    }
  });

  await page.evaluate(() => {
    document.getElementById('location').scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await page.waitForTimeout(400);
  await page.screenshot({ path: 'section-location-fix.png', clip: { x: 0, y: 0, width: 390, height: 844 } });
  console.log('Saved section-location-fix.png');

  await browser.close();
})();
