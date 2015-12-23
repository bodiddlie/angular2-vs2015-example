var path = require('path');

module.exports = function (config) {
    var _config = {
        basePath: './',
        frameworks: ['jasmine'],
        files: [
            { pattern: 'spec-bundle.js', watched: true }
        ],
        exclude: [],
        preprocessors: {
            'spec-bundle.js': ['webpack', 'sourcemap'],
        },
        webpack: {
            resolve: {
                cache: false,
                root: __dirname,
                extensions: ['', '.ts', '.js']
            },
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    {
                        test: /\.ts$/,
                        loader: 'ts-loader',
                        exclude: [/node_modules/]
                    },
                    { test: /\.css$/, loader: 'raw-loader' }
                ],
                postLoaders: [
                    {
                        test: /\.(js|ts)$/,
                        include: path.resolve('app'),
                        loader: 'istanbul-instrumenter-loader',
                        exclude: [/node_modules/]
                    }
                ]
            },
            stats: { colors: true, reasons: true },
            debug: false,
            noParse: [
                /zone\.js\/dist\/zone-microtask\.js/,
                /zone\.js\/dist\/long-stack-trace-zone\.js/,
                /zone\.js\/dist\/jasmine-patch\.js/
            ]
        },
        webpackServer: {
            noInfo: true
        },
        coverageReporter: {
            dir: 'coverage/',
            reporters: [
                { type: 'text-summary' },
                { type: 'html' }
            ]
        },
        reporters: ['progress', 'coverage'],
        colors: true,
        port: 9876,
        logLeve: config.LOG_INFO,
        browsers: ['PhantomJS'],
        singleRun: false
    };

    config.set(_config);
};