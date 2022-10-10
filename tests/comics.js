const { test, expect} = require('@playwright/test');


test('on the main page Comics', async ({page})=>{
  await page.goto('http://127.0.0.1:5500/index.html');

  // Go to http://127.0.0.1:5500/index.html
  //await page.goto('http://127.0.0.1:5500/index.html');
  await expect(page).toHaveTitle(/Everyday Comics/);

  // Click text=First
  await page.locator('text=First').click();

  // Click text=Last
  await page.locator('text=Last').click();
  // Click html
  await page.locator('html').click();
  // Click text=Random
  await page.locator('text=Random').click();


  // Select 2
  await page.locator('select').selectOption('2');

  await page.screenshot({path: `comics_screen.png`});
  // ---------------------
  await context.close();
  await browser.close();
});