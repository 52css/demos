require('chromedriver');
require('geckodriver');
require('iedriver');
var webdriver = require('selenium-webdriver');
  

var browser = process.env.BROWSER || "CHROME";

var buildWebDriver = function() {
  switch (browser.toLowerCase()){
    case "chrome":
    return new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();
    case "firefox":
      return new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.firefox()).
        build();
    case "ie":
      return new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.ie()).
        build();
    case "safari":
        return new webdriver.Builder().
          withCapabilities(webdriver.Capabilities.Safari()).
          build();
    default:
      return new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();
  }

};

var driverInstance = buildWebDriver();

module.exports = function () {
  // Create World instance to be used by step definitions
  this.World = function() {
    this.driver = driverInstance;
  }
};
module.exports.driver = driverInstance;