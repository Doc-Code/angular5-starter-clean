var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var UglifyJSPlugin = require('uglifyjs-webpack-plugin'); // плагин минимизации

var extractSass = new ExtractTextPlugin({
    filename: "css/[name].css",
    disable: process.env.NODE_ENV === "development"
});
module.exports = {
    entry: {
        'polyfills': './dev/polyfills.ts',
        'static': './dev/static.ts',
        'app': './dev/main.ts',
        'styles': [
            './node_modules\\font-awesome\\scss\\font-awesome.scss',
            './node_modules\\simple-line-icons\\scss\\simple-line-icons.scss',
            './dev/style/style.scss'
]
    },
    output:{
        path: path.resolve(__dirname, './public'),     // путь к каталогу выходных файлов - папка public
        publicPath: '../',
        filename: "[name].js"       // название создаваемого файла
    },
    resolve: {
        extensions: ['.ts', '.js', '.scss']
    },
    resolveLoader: {
        "modules": [
            "./node_modules",
            "./node_modules"
        ]
    },
    module:{
        rules:[   //загрузчик для ts
            {
                test: /\.ts$/, // определяем тип файлов

                use: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: { configFileName: path.resolve(__dirname, 'tsconfig.json') }
                    } ,
                    'angular2-template-loader'
                ]
            },
            {
                test:  /\.scss$|\.sass$/,
                use: extractSass.extract({
                    use: [
                        {
                        loader: "css-loader",
                            options: {
                                "sourceMap": false,
                                "importLoaders": 1
                            }
                    }, {
                        loader: "sass-loader",
                            options: {
                                "sourceMap": false,
                                "precision": 8,
                                "includePaths": []
                            }
                    }],
                })
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: "url-loader",
                options: {
                    "name": "img/[name].[hash:20].[ext]",
                    "limit": 10000
                }
            },

            //
            //
            // {
            //     test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            //     loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            // },
            // {
            //     test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            //     loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            // },
            // {
            //     test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            //     loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            // },
            // {
            //     test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            //     loader: 'file-loader'
            // }
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash:20][ext]',
                        outputPath: 'fonts/',
                    }
                }]
            }
            // {
            //     test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            //     loader: "file?name=fonts/[name].[ext]"
            // },
            // {
            //     test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            //     loader: "url-loader?limit=10000&mimetype=application/font-woff"
            // },
            // {
            //     test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            //     loader: "file-loader"
            // }

        ]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core/,
            path.resolve(__dirname, 'dev'), // каталог с исходными файлами
            {} // карта маршрутов
        ),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'polyfills']
        }),
        // new ExtractTextPlugin('./styles.css'),
        new UglifyJSPlugin(

        ),
        extractSass,
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,

        })
    ]
}
