var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
  return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
    if (TEST_REGEXP.test(file)) {
        // Normalize paths to RequireJS module names.
        allTestFiles.push(pathToModule(file));
    }
});

//
var paths = {
    'chai': 'node_modules/chai/chai',
    'sinon': 'node_modules/sinon/pkg/sinon'
};

require.config({
    // Karma serves files under /base, which is the basePath from your config file
    baseUrl: '/base',

    paths: paths,

    shim: {
        sinon: {exports: 'sinon'}
    },

    // dynamically load all test files
    deps: allTestFiles,

    // we have to kickoff karma, as it is asynchronous
    callback: window.__karma__.start
});
