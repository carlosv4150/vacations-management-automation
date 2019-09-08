import * as reporter from 'cucumber-html-reporter';
import * as fs from 'fs';
import * as mkdirp from 'mkdirp';
import * as path from 'path';
const jsonReports = path.join(process.cwd(), '/reports/json');
const htmlReports = path.join(process.cwd(), '/reports/html');
const reportJsonPath = '/cucumber_report.json';
const reportHtmlPath = '/cucumber_reporter.html';
const targetJson = jsonReports + reportJsonPath;

const cucumberReporterOptions = {
  jsonFile: targetJson,
  output: htmlReports + reportHtmlPath,
  reportSuiteAsScenarios: true,
  theme: 'bootstrap',
  launchReport: true,
  removeExistingJsonReportFile: true
};

export class Reporter {

  public static createDirectory(dir: string) {
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir);
    }
  }

  public static createHTMLReport() {
    try {
      reporter.generate(cucumberReporterOptions); // invoke cucumber-html-reporter
    } catch (err) {
      throw new Error('Failed to save cucumber test results to json file.');
    }
  }
}