// Karma configuration
// Generated on Tue Jul 08 2014 08:34:59 GMT-0700 (PDT)

function extend(obj) {
    return [].reduce.call(arguments, function (ignored, extras) {
        return Object.keys(extras).reduce(function(ignored, value) {
            obj[value] = extras[value];
            return obj;
        }, obj);
    });
}

var envconf = {}, envwatch = {};

try {
    // Usage example: KARMA_CONF='{"detectBrowsers": {"enabled": true, "usePhantomJS": false}}' karma start
    envconf = process.env.KARMA_CONF ? JSON.parse(process.env.KARMA_CONF) : {};
} catch (e) {
    console.warn('Invalid KARMA_CONF environment variable', e);
}

try {
    envwatch = process.env.KARMA_WATCH ? !!JSON.parse(process.env.KARMA_WATCH) : false;
} catch (e) {
    console.warn('Invalid KARMA_WATCH environment variable', e);
}

module.exports = function (config) {
    var defaultconf = {

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['detectBrowsers', 'mocha', 'requirejs'],

        // list of files / patterns to load in the browser
        files: [
            'test/karma.main.js',
            'test/phantomjs-fixes.js',
            {pattern: 'lib/**/*.js', included: false},
            {pattern: 'test/**/*.spec.js', included: false},
            {pattern: 'node_modules/chai/chai.js', included: false},
            {pattern: 'node_modules/sinon/pkg/sinon.js', included: false}
        ],

        // list of files to exclude
        exclude: [],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'lib/**/*.js': ['coverage']
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage', 'junit'],

        coverageReporter: {
            type: 'lcov',
            dir: 'test-results/'
        },

        junitReporter: {
            outputFile: 'test-results/karma.junit.xml',
            suite: ''
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],

        detectBrowsers: {
            // enable/disable, default is true
            enabled: true,

            // enable/disable phantomjs support, default is true
            usePhantomJS: true
        },

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    };

    var conf = extend(defaultconf, envconf, envwatch ? { autoWatch: true, browser: ['PhantomJS'], detectBrowsers: { enabled: false }, singleRun: false } : {});

    config.set(conf);
};
