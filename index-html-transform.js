const { version } = require("./package.json");

module.exports = (targetOptions, indexHtml) => {
    return indexHtml.replace('APP_VERSION', version);
}