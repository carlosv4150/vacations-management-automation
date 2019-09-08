const { BeforeAll, After, AfterAll } = require('cucumber');
import { config } from '../../protractor/config';
import { browser } from 'protractor';

BeforeAll({ timeout: 100 * 1000 }, async () => {
  await browser.get(config.baseUrl);
});

After(async function () {
  const screenShot = await browser.takeScreenshot();
  await this.attach(screenShot, 'image/png');
});

AfterAll({ timeout: 100 * 1000 }, async () => {
  await browser.quit();
});