module.exports = {
    entry: "./main.js",
    output: {
        path: './',
        filename: 'index.js',
    },
    devServer: {
        inline: true,
        port: 1111
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: [ 'es2015', 'react' ]
                }
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            }
        ]
    }
}
