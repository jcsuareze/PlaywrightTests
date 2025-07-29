const {test, expect} = require('@playwright/test');

test.only('Prueba varios elementos allTextContent con otra pagina (networkidle)', async({page})=>{

    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator('input#userEmail').fill("anshika@gmail.com");
    await page.locator('input#userPassword').fill('Iamking@000');
    await page.locator("[value='Login']").click();

    //Ya que allTextContents espera una llamada API  devuelve una promesa, debemos implementar una espera
    //await page.waitForLoadState('networkidle'); // Espera a que la red esté inactiva antes de continuar
   /* await page.waitForLoadState( 'networkidle'); //discoureged     
    const titles = await page.locator('.card-body b').allTextContents();
    console.log(titles);*/

    //alternativamente se puede guardar el locator en 
    // y usar waitfor() para esperar a el último elemento esté visible
    await page.locator('.card-body b').last().waitFor();
    const allTitles = await page.locator('.card-body b').allTextContents();
    console.log(allTitles);


});