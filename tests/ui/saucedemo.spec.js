const { test, expect } = require("@playwright/test");

test.describe("Web UI Demo",()=> {
test("TC-1 Succesfull login", async ({ page }) => {
  
await page.goto("https://www.saucedemo.com/");
await expect(page.locator('[data-test="username"]')).toBeVisible()

await page.getByPlaceholder('Username').fill('standard_user')
await page.locator('[id="password"]').fill('secret_sauce')
await page.getByText('Login').click()

// validasi halaman dashboard
await expect(page.getByText('Swag Labs')).toBeVisible()
await expect(page.getByRole('button', { name: 'Open Menu' })).toBeVisible()

});
});

test('TC-2 Succesful Login Visual User', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
await expect(page.locator('[data-test="username"]')).toBeVisible()

await page.getByPlaceholder('Username').fill('visual_user')
await page.locator('[id="password"]').fill('secret_sauce')
await page.getByText('Login').click()

// validasi halaman dashboard
await expect(page.getByText('Swag Labs')).toBeVisible()
await expect(page.getByRole('button', { name: 'Open Menu' })).toBeVisible()

});

