import {
  checkOptions,
  removeFilesFromDir,
} from './webpack-clean-plugin-utils';
import WebpackCleanOnBuildPlugin from './webpack-clean-plugin';

jest.mock('fs');

test('checkOptions should throw when required options are not passed', () => {
  const options = {
    cleanAll: false,
    cleanCondition: '',
  };

  expect(() => checkOptions(options)).toThrow();
});

describe('removeFilesFromDir', () => {
  const MOCK_FILE = {
    '/path/to/file1.js': 'console.log("file1 contents");',
    '/path/to/file2.txt': 'file2 contents',
  };

  beforeEach(() => {
    /* eslint-disable */
    require('fs').__setMockFiles(MOCK_FILE);
    /* eslint-enable */
  });

  test('removes all files from directory', () => {
    expect(removeFilesFromDir({
      src: '/path/to',
      clearAll: true,
    })).toBe(undefined);
  });
});

describe('WebpackCleanOnBuildPlugin', () => {
  const MOCK_FILE = {
    '/path/to/file1.js': 'console.log("file1 contents");',
    '/path/to/file2.txt': 'file2 contents',
  };

  beforeEach(() => {
    /* eslint-disable */
    require('fs').__setMockFiles(MOCK_FILE);
     /* eslint-enable */
  });

  test('should create plugin', () => {
    const plugin = new WebpackCleanOnBuildPlugin({
      src: '/path/to',
      clearAll: true,
    });

    expect(plugin).toBeDefined();
  });
});
