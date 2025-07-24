//Para referencias de como se importan los modulos,  fixtures  ver archivo declaracionFixtures.js
//Para ver ejemplos de pruebas con Playwright, ver archivo PlaywrightTests.js

const {test} = require('@playwright/test');
const {expect} = require('@playwright/test');



test('Primera prueba', async({browser}) =>{

    const context  = await browser.newContext()
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
});

//La pagina de playwright que contiene los assertions y los matchers
//https://playwright.dev/docs/test-assertions   


test('Segunda prueba', async({page}) =>{

    await page.goto('https://google.com');
    console.log(await page.title()); // Imprime el título de la página en la consola
    await expect(page).toHaveTitle('Google'); // Verifica que el título de la página sea 'Google'

});

