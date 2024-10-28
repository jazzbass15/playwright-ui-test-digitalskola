const { test, expect } = require("@playwright/test");

test.describe("Web UI Demo",()=> {
test("TC-1 Succesfull login", async ({ page }) => {
  
    // navigation
  await page.goto("https://www.saucedemo.com/");

  // input username
await page.getByPlaceholder('Username').fill('standard_user')

// input password
await page.locator('[id="password"]').fill('secret_sauce')

// click button 
await page.getByText('Login').click()

// validasi halaman dashboard
await expect(page.getByText('Swag Labs')).toBeVisible()
await expect(page.getByRole('button', { name: 'Open Menu' })).toBeVisible()

});
});

test("TC-2 Succesfull Add to cart", async ({ page }) => {
 
  // navigation
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
 
  //click button
  await page.locator('[data-test="shopping-cart-link"]').click();

  //validasi halaman dashboard
await expect(page.getByText('PSwag Labs')).toBeVisible()
await expect(page.getByRole('button', { name: 'Your Cart' })).toBeVisible()

});
