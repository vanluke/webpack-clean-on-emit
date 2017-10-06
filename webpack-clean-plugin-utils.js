const fs = require('fs');
const path = require('path');

const knownOptions = {
  src: {
    required: true,
    type: 'string',
  },
  clearAll: {
    required: true,
    type: 'boolean',
  },
  cleanCondition: {
    required: false,
    type: 'any',
  },
};

function checkOptions(options) {
  const optionsKeys = Object.keys(options);
  const required = Object.keys(knownOptions)
    .filter(i => knownOptions[i].required);
  required.forEach((i) => {
    if (optionsKeys.indexOf(i) === -1) {
      throw new Error(`Option ${required} is required!`);
    }
  });
}

function removeFilesFromDir(options) {
  const files = path.resolve(options.src);
  const unlinked = [];
  if (!fs.existsSync(files)) {
    return console.log('Directory does not exists!');
  }
  return fs.readdir(files, (err, filesNames) => {
    if (!filesNames) {
      return console.log('Empty directory');
    }
    filesNames.forEach((file) => {
      if (options.clearAll || options.cleanCondition) {
        fs.unlink(path.resolve(options.src, file));
        unlinked.push(file);
      }
    });
    if (unlinked.length > 0) {
      return console.log('Removed old assets: ', unlinked);
    }
    return console.log('O files removed');
  });
}

module.exports = {
  removeFilesFromDir,
  checkOptions,
};
