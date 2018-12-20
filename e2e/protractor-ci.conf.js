const config = require('./protractor.conf').config;

config.capabilities = {
  browserName: 'chrome',
  chromeOptions: {
    args: ['--headless', '--no-sandbox']
  },
  allScriptsTimeout: 30000,
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 50000,
    print: function() {}
  },
};

exports.config = config;