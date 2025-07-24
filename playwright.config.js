// @ts-check
const { devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */
//export default defineConfig({   //<--  Esta linea viene por defecto en el archivo playwright.config.js
// Se usa const config = ({  para mostrar que es una configuracion de Playwright
 
const config = {
  testDir: './tests/',
  testMatch: '**/*.js',
  //no probar especificamente el archivo declaracionFixtures.js
  testIgnore: ['**/declaracionFixtures.js'],

  timeout: 30 * 1000,

  expect: {
    
    timeout: 5000
  },

  reporter: 'html',

  use: {

    browserName : 'chromium', // Puede ser 'chromium', 'firefox' o 'webkit'
    headless: false, // Ejecutar en modo headless (sin interfaz gráfica)
    viewport: { width: 1280, height: 720 }, // Tamaño de la ventana del navegador
    screenshot: 'on',
    trace: 'on', // off, on
  },

};

module.exports = config;