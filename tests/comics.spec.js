const { test, expect} = require('@playwright/test');


test('on the main page Comics', async ({page})=>{
  await page.goto('http://127.0.0.1:5500/index.html');
  await expect(page).toHaveTitle(/Everyday Comics/)
  console.log('Title verified ..✓');


  //test('clickOnTheFirstPage', async ({page})=>{
  await page.locator('text=First').click();
  const expectedResultFirstPage = (await page.locator('text=Barrel - Part 1')); // This is the element that reads "barrel"
  expect(expectedResultFirstPage).toHaveText('Barrel - Part 1');

  console.log('First page ..✓');

  // Click text=Last
  await page.locator('text=Last').click();                                         //textContent()
  const expectedResultLastPage=(await page.locator('text=Fan Theories'));
  expect(expectedResultLastPage).toHaveText('text=Fan Theories');
  console.log('Last page ..✓');



  // Click html
  await page.locator('html').click();
  
  // Click text=Random
  await page.locator('text=Random').click();


  // Select 2
  await page.locator('select').selectOption('2');

  
  // ---------------------
  
});