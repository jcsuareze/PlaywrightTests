//Para referencias de como se importan los modulos,  fixtures  ver archivo declaracionFixtures.js
//Para ver ejemplos de pruebas con Playwright, ver archivo PlaywrightTests.js

const {test} = require('@playwright/test');
const {expect} = require('@playwright/test');



test('Prueba falso login ', async({browser}) =>{

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
//Prueba cuando existen varios elementos con el mismo locator
//En este caso, se usa el locator como una variable para evitar duplicar código
test('Prueba login ', async({browser}) =>{

    const context  = await browser.newContext()
    const page = await context.newPage();

    //usando el locator como una variable
    const locatorUsername = page.locator('input#username.form-control');
    const locatorPassword = page.locator('input#password.form-control');
    const locatorSignInButton = page.locator('input#signInBtn.btn.btn-info.btn-md');
    const learningSelector = page.locator('text=learning'); // Selector para el texto "learning"

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    //SELECTORES 
    await locatorUsername.fill('');
    await locatorUsername.fill('rahulshettyacademy');
    await locatorPassword.fill('');                     
    await locatorPassword.fill('learning');
    await locatorSignInButton.click();
    
    // Este selector encuentra varios elementos pero solo necesitamos el que contiene "iphone" 
    const getiPhoneText = page.locator('.card-body .card-title a');

    
    console.log(await getiPhoneText.nth(0).textContent());

   await expect(getiPhoneText).toContainText('iphone');

});

//La pagina de playwright que contiene los assertions y los matchers
//https://playwright.dev/docs/test-assertions   


test('Prueba de pagina', async({page}) =>{

    await page.goto('https://google.com');
    console.log(await page.title()); // Imprime el título de la página en la consola
    await expect(page).toHaveTitle('Google'); // Verifica que el título de la página sea 'Google'

});



//Haz una prueba que se conecte a google, escriba Mexico en el campo de búsqueda, y verifique que el primer resultado contenga la palabra "Mexico"
test('Prueba de busqueda en Google', async({page}) =>{

    await page.goto('https://google.com.mx');
    const fillbox = page.locator('.gLFyf#APjFqb');
    await fillbox.fill('México'); // Escribe 'Mexico' en el campo de búsqueda
    await page.keyboard.press('Enter'); // Presiona Enter para buscar
    await page.waitForTimeout(2000); // Espera un momento para que los resultados se carguen

    // Verifica que el primer resultado contenga la palabra "Mexico"
    const firstResult = await page.locator('h3').first().textContent();
    console.log(firstResult);
    expect(firstResult).toContain('México'); // Verifica que el primer resultado contenga 'Mexico'

});


