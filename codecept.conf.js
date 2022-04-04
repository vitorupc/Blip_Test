const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://www.blip.com',
      browser: 'chrome',
      host: '127.0.0.1',
      port: 4444,
      restart: false,
      logLevel: "error",
      logOutput: ".//logs//output//webdriver",
      screenshotOnReject: true,
      smartWait: 5000,
      windowSize: '1920x1680', // largura x altura
      timeouts: {
        script: 10000,
        "page load": 10000,
        Mochawesome: {
          uniqueScreenshotNames: "true"
        }
      },
      desiredCapabilities: {
        chromeOptions: {
          args: [ /*"--headless",*/ "--disable-gpu", "--no-sandbox"]
        }
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {
    reporterEnabled: "mochawesome",
    reporterOptions: {
      "codeceptjs-cli-reporter": {
        stdout: "-",
        options: {
          verbose: true,
          steps: true
        }
      },
      mochawesome: {
        stdout: "-",
        options: {
          reportDir: ".//logs//output",
          reportFilename: "report",
          reportPageTitle: "tests-with-codeceptjs - Acceptance Tests",
          reportTitle: "tests-with-codeceptjs - Acceptance Tests",
          autoOpen: true,
          enableCode: true,
          inlineAssets: true,
          overwrite: true,
          quiet: false
        }
      }
    }
  },
  name: 'Novo',


  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    screenshotOnFail: {
      enabled: true
    },
    autoDelay: {
      enabled: true,
      delayBefore: 300,
      delayAfter: 300
    },
  }
}