const { test } = require ("playwright/test");
const { LoginPage } = require("./page-object/login-page");
const { DashboardPage } = require("./page-object/dashboard-page");
const { CartPage} = require("./page-object/cart-page");


test('TC 3 Succesful login using page object', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");

    const loginPage = new LoginPage (page)
    const dashboardpage = new DashboardPage (page)
    await loginPage.inputUsername ()
    await loginPage.inputPassword ()
    await loginPage.clickLoginButton();
    
});
test('TC 3 Succesful login using page object', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");

    const loginPage = new LoginPage (page)
    await loginPage.inputUsername ()
    await loginPage.inputPassword ()
    await loginPage.clickLoginButton();

    test('TC 3 Succesful login using page object', async ({ page }) => {
        await page.goto("https://www.saucedemo.com/");
    
        const cartPage = new cartPage (page)
        await page.click('inventory-item-price');addtocart ()
        await page.click('shopping-cart-link');addtocart ()
        await expect(page.getByText('Swag Labs')).toBeVisible()
        
    });
    
});
 