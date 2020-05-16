const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const config = {
    entry: './src/index.js',
    output: {
        // path.join() 去拼接路径
        // __dirname 当前文件的绝对路径
        filename: 'bundle.js',
        path: path.join(__dirname, './dist')
    },
    module: {
        rules: [{
                // sass-loader node-sass两个依赖都需要安装
                test: /\.(scss|sass)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'url-loader',
                options: {
                    limit: 5000
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: 'file-loader'
                }]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: "index.html",
            template: "index.html"
        })
    ]
}

module.exports = config