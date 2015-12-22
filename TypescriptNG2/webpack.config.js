var path = require('path');

const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build'),
    entryPoint: path.join(__dirname, 'app', 'bootstrap.ts')
}
module.exports = {
    entry: PATHS.entryPoint,
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader', include: PATHS.app },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/ , loader: 'url-loader?importLoaders=1&limit=1000000' },
            { test: /\.scss$/, loader: 'style!css!sass' }
        ]
    }
}