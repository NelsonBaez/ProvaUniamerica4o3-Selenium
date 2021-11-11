const {Builder, By, Key, util} = require('selenium-webdriver');

async function example(){
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000");
  await driver.findElement(By.id("link-contatos")).click();
  await driver.findElement(By.id("contato-new")).click();
  await driver.findElement(By.name("name")).sendKeys("jorgin");
  await driver.findElement(By.name("email")).sendKeys("jorgin@gmail.com");
  await driver.findElement(By.name("phone")).sendKeys("8123213213");
  await driver.findElement(By.id("cadastrar")).click();
  await driver.findElement(By.id("contato-new")).click();
}

example();