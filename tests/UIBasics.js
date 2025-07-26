//Para referencias de como se importan los modulos,  fixtures  ver archivo declaracionFixtures.js
//Para ver ejemplos de pruebas con Playwright, ver archivo PlaywrightTests.js

const {test} = require('@playwright/test');
const {expect} = require('@playwright/test');



test.only('Prueba falso login ', async({browser}) =>{

    const context  = await browser.newContext()
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    //SELECTORES 
    await page.locator('input#username.form-control').fill('rahulshettyacardemy');
    await page.locator('input#password.form-control').fill('learning');
    await page.locator('input#signInBtn.btn.btn-info.btn-md').click();
    console.log(await page.locator("[style*='block']").textContent());
    // Verificar que el texto esperado esté presente
    await expect(page.locator("[style*='block']")).toHaveText('Incorrect username/password.');

});

//La pagina de playwright que contiene los assertions y los matchers
//https://playwright.dev/docs/test-assertions   


test('Prueba de pagina', async({page}) =>{

    await page.goto('https://google.com');
    console.log(await page.title()); // Imprime el título de la página en la consola
    await expect(page).toHaveTitle('Google'); // Verifica que el título de la página sea 'Google'

});

