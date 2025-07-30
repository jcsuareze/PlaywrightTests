//Para referencias de como se importan los modulos,  fixtures  ver archivo declaracionFixtures.js
//Para ver ejemplos de pruebas con Playwright, ver archivo PlaywrightTests.js
//Este archivo contiene pruebas,  NTH, first, last, allTextContents  y uso de variables para locators CSS *

const {test} = require('@playwright/test');
const {expect} = require('@playwright/test');
const { get } = require('http');



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






//Prueba cuando existen varios elementos con el mismo locator
//En este caso, se usa el locator como una variable para evitar duplicar código
//uso de Nth para seleccionar el primer elemento de la lista,  tambien se puede usar first() para elegir el primer elemento y last() para elegir el último elemento
test('Prueba login Seleccionar un elemento de varios elementos ', async({browser}) =>{

    const context  = await browser.newContext()
    const page = await context.newPage();

    //usando el locator como una variable
    const locatorUsername = page.locator('input#username.form-control');
    const locatorPassword = page.locator('input#password.form-control');
    const locatorSignInButton = page.locator('input#signInBtn.btn.btn-info.btn-md');

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    //SELECTORES 
    await locatorUsername.fill('');
    await locatorUsername.fill('rahulshettyacademy');
    await locatorPassword.fill('');                     
    await locatorPassword.fill('learning');
    await locatorSignInButton.click();
    
    // Este selector encuentra varios elementos pero solo necesitamos el que contiene "iphone" 
    const getiPhoneText = page.locator('.card-body .card-title a');
    //Variable que guarda el primer elemento
    //const getiPhoneText = page.locator('.card-body .card-title a').nth(0).textContent;

    
    console.log(await getiPhoneText.nth(1).textContent());
    console.log(await getiPhoneText.first().textContent());
    console.log(await getiPhoneText.last().textContent());

});


test('Prueba de varios elementos (allTextContents)', async({page}) =>{

    

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.locator('input#username.form-control').fill('rahulshettyacademy');
    await page.locator('input#password.form-control').fill('learning');
    await page.locator('input#signInBtn.btn.btn-info.btn-md').click();
    const getCardTitles = page.locator('.card-body b');

    const allTitles = await getCardTitles.allTextContents();
    console.log(allTitles);
});



