// @ts-check
const { devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */
//export default defineConfig({   //<--  Esta linea viene por defecto en el archivo playwright.config.js
// Se usa const config = ({  para mostrar que es una configuracion de Playwright
 
const config = {
  testDir: './tests/',
  //no probar especificamente el archivo declaracionFixtures.js
  testIgnore: ['**/declaracionFixtures.js'],

  timeout: 5 * 1000,

  expect: {
    
    timeout: 5000
  },

  reporter: [
    ['html'],
  ],

  use: {

    browserName : 'chromium', // Puede ser 'chromium', 'firefox' o 'webkit'
    headless: false, // Ejecutar en modo headless (sin interfaz gráfica)
    //ventana maxima de 1280x720
    viewport: { width: 1280, height: 720 }, // Tamaño de la ventana del navegador
    screenshot: 'on',
    //screenshot: 'only-on-failure', // Toma capturas de pantalla solo en caso de fallo
    trace: 'on', // off, on  //Muestra el rastro de la ejecucion de las pruebas, para ver que paso en cada paso de la prueba, util para depurar errores
    //trace: 'retain-on-failure', // Guarda el rastro de la ejecucion de las pruebas, para ver que paso en cada paso de la prueba, util para depurar errores

    //video: 'on', // off, on, retain-on-failure // Graba un video de la ejecucion de las pruebas, util para depurar errores
    //video: 'retain-on-failure', // Graba un video de la ejecucion de las pruebas, util para depurar errores
  },

};

module.exports = config;