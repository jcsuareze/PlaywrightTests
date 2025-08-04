const {test, expect} = require('@playwright/test');
//Si nos atoramos en este paso, podemos ver el video 20 de la seccion 5 


test('dropdown test, check Btn y radioButton', async({browser})=>{

    //Para abrir una nueva pagina en Playwright, se crea un contexto y luego una nueva pagina
    // Esto es necesario porque Playwright no permite abrir una nueva pagina directamente desde la pagina actual


    const context = await browser.newContext();
    const page = await context.newPage();


    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = page.locator('#username');
    const signInBtn = page.locator('#signInBtn');
    const documentLink = page.locator('[href*="documents-request"]');
    //Como son eventos asincronos, y waitforEvent se debe de usar ANTES de la funcion click
    //debemos usar PROMISE.all para esperar a que se cumplan ambos eventos, que guarda los dos eventos en un array
    // y luego acceder al segundo elemento del array para obtener la nueva pagina

    const [page2] = await Promise.all([ //const [page2] es una destructuracion de array, que nos permite trabajar con la nueva pagina
        context.waitForEvent('page'), // Espera a que se abra una nueva página que devuelve estados (fulfilled, rejected o pending)
        documentLink.click(), // Click en el enlace que abre la nueva página    
    
    ])// Espera a que se cumplan ambos eventos y que el estado de la promesa sea fulfilled ( puede ser fulfilled, rejected o pending)

    //page2 es la nueva pagina en la que trabajaremos


    const text = await page2.locator('.im-para.red').textContent(); // Imprime el contenido del elemento con la clase 'im-para red' en la nueva página
    const newText = text.split("@"); //Si el texto contiene un @, lo separa en dos partes
    const domain = newText[1].split(" ")[0]; // Toma la segunda parte del texto y la separa por espacios, quedandose con el dominio
    console.log(domain); // Muestra el dominio en la consola
    console.log(text); // Muestra el contenido en la consola
    //page2.pause(); // Pausa para inspeccionar la nueva página

    //Para volver a interactuar con la pagina original, debemos usar el contexto original
    await page.bringToFront(); // Trae la pagina original al frente para poder interactuar con ella
    await userName.fill(domain); // Rellena el campo de usuario con el dominio obtenido
    //await page.pause(); // Pausa la ejecucion para poder ver el resultado
    console.log(await userName.inputValue()); // Imprime el valor del campo de usuario en la consola

});