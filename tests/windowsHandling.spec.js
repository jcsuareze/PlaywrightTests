const {test, expect} = require('@playwright/test');
//Si nos atoramos en este paso, podemos ver el video 20 de la seccion 5 


test('dropdown test, check Btn y radioButton', async({browser})=>{

    //Para abrir una nueva pagina en Playwright, se crea un contexto y luego una nueva pagina
    // Esto es necesario porque Playwright no permite abrir una nueva pagina directamente desde la pagina actual


    const context = await browser.newContext();
    const newPage = await context.newPage();


    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator('[href*="documents-request"]');
    //Como son eventos asincronos, y waitforEvent se debe de usar ANTES de la funcion click
    //debemos usar PROMISE.all para esperar a que se cumplan ambos eventos, que guarda los dos eventos en un array
    // y luego acceder al segundo elemento del array para obtener la nueva pagina

    const [page2] = await Promise.all([
        context.waitForEvent('page'), // Espera a que se abra una nueva página
        documentLink.click(), // Click en el enlace que abre la nueva página    
    
    ])// Espera a que se cumplan ambos eventos


    
   // const page2 = await context.waitForEvent('page');// Espera a que se abra una nueva página

    page.pause(); // Pausa para inspeccionar la nueva página


});