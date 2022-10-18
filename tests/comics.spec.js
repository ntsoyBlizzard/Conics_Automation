const { test, expect } = require('@playwright/test');

let context;
test.beforeAll(async({browser})=>{
  context=browser.newContext();
  await (await context).tracing.start(
    {
      snapshots: true,
      screenshots:true
    });
})

test.afterAll(async ()=> {
 // await context.tracing.stop({ path: 'trace.zip' });
})

test('on the main page Comics', async ({ page }) => {
 await page.goto('http://127.0.0.1:5500/index.html');
  await expect(page).toHaveTitle(/Everyday Comics/)
  console.log('Title verified ..✓');


  //test('clickOnTheFirstPage', async ({page})=>{
  await page.locator('text=First').click();
  const expectedResultFirstPage = (await page.locator('text=Barrel - Part 1')); // This is the element that reads "barrel"
  expect(expectedResultFirstPage).toHaveText('Barrel - Part 1');
   console.log('First page ..✓');

  // Click text=Last
  await page.locator('text=Last').click();                                        
  const expectedResultLastPage = (await page.locator('text=Space Adventury'));
  expect(expectedResultLastPage).toHaveText('text=Space Adventury');
  console.log('Last page ..✓');

  // Checked all list from dropdown
 /*const listCount=browser.driver.findelements('//option[@value]').count();
 for (let i=0; i<dropdown.length; i++) {
 await expect(clickALl).toBeEnabled();}
*/

function myFunction() {
  document.getElementById("comics-list").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
page.onclick = function(list) {
  if (!list.target.matches('col-md-4')) {
    var dropdowns = document.getElementsByClassName("list-group");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      console.log(openDropdown);
      openDropdown.textContent().click();
     }
  }
}
//let personList=page.findElementByClassName('list-group');
//const listCount = page.findElementsByXpath("//option[@value]");


 
// Click html
  await page.locator('html').click();

  // Click text=Random
  await page.locator('text=Random').click();

});