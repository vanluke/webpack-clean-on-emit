const utils = require('./webpack-clean-plugin-utils');

function WebpackCleanOnBuildPlugin(options) {
  this.start = new Date();
  utils.checkOptions(options);
  this.options = options;
}

WebpackCleanOnBuildPlugin.prototype.apply = function (compiler) {
  compiler.plugin('emit', (compilation, callback) => {
    utils.removeFilesFromDir(this.options);
    return callback();
  });
};

module.exports = WebpackCleanOnBuildPlugin;
