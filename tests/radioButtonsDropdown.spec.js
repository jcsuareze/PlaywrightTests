const {test, expect} = require('@playwright/test');

test('dropdown test, check Btn y radioButton', async({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName=  page.locator('#username')
    const signIn = page.locator('#signInBtn')
    const dropdown = page.locator('select.form-control');
    const radioButton = page.locator('span.radiotextsty');

    await dropdown.selectOption('consult');
    await radioButton.last().click();
    await page.locator('#okayBtn').click();

    console.log(await page.locator('span.radiotextsty').last().isChecked());
    await expect(page.locator('span.radiotextsty').last()).toBeChecked();

    await page.locator('#terms').click();
    await expect(page.locator('#terms')).toBeChecked();
    await page.locator('#terms').uncheck();
    await expect(page.locator('#terms')).not.toBeChecked();
    

    await page.pause();

})

test.only('blinking text', async({page})=>{
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   const blinkLocator = page.locator('[href*="documents-request"]');
   console.log(await blinkLocator.textContent());

   await expect(blinkLocator).toHaveAttribute("class","blinkingText");
});