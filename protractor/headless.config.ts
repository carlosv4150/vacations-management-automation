import { Config, browser } from 'protractor';
import { Reporter } from './helpers/reporter';
const jsonReportPath = '/reports/json';
const jsonReports = process.cwd() + jsonReportPath;

export const config: Config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
      browserName: 'chrome',
      chromeOptions: {
        args: ['--headless', '--disable-gpu']
      },
      maxInstances: 1
    },
    specs: [
      '../../test/features/*.feature'
    ],
    getPageTimeout: 100000,
    keepAlive: false,
    onPrepare: () => {
        browser.manage().timeouts().implicitlyWait(0);
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        Reporter.createDirectory(jsonReports);
    },
    baseUrl: 'https://vacations-management.herokuapp.com/',
    cucumberOpts: {
        format: 'json:./reports/json/cucumber_report.json',
        require: ['../../dist/test/step_definitions/*.js', '../../dist/protractor/helpers/*.js'],
        strict: true,
        tags: '@gap',
      },
    SELENIUM_PROMISE_MANAGER: false,
    onComplete: () => {
        Reporter.createHTMLReport();
    }
};