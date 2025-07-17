const { Builder, By, until } = require('selenium-webdriver');

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function sendKeysSlowly(element, text, delay = 200) {
  for (const char of text) {
    await element.sendKeys(char);
    await sleep(delay);
  }
}

async function automateLogin() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('http://localhost:5173/login');

    const emailInput = await driver.wait(until.elementLocated(By.css('input[name="loginEmail"]')), 10000);
    const passwordInput = await driver.findElement(By.css('input[name="loginPassword"]'));
    const submitButton = await driver.findElement(By.css('input[type="submit"]'));

    await sendKeysSlowly(emailInput, 'jefferson@gmail.com', 150);

    await sleep(500);

    await sendKeysSlowly(passwordInput, 'Recuva1234', 150);

    await sleep(500);

    await submitButton.click();


    await driver.wait(until.urlContains('/dashboard'), 30000);

    console.log('Login automatizado exitosamente');

  } catch (error) {
    console.error('Error en la automatización:', error);
  } finally {
    await driver.quit();
  }
}

automateLogin();
