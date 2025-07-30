const {test, expect} = require('@playwright/test');

test('dropdown test y radioButton', async({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName=  page.locator('#username')
    const signIn = page.locator('#signInBtn')
    const dropdown = page.locator('select.form-control');
    const radioButton = page.locator('span.radiotextsty');

    await dropdown.selectOption('consult');
    await radioButton.last().click();
    await page.locator('#okayBtn').click();


    //await page.pause();

})