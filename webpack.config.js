const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')


const isDevelopment = process.env.NODE_ENV != 'produiction'

module.exports = {
    mode: isDevelopment ?  'development': 'production',
    devtool: 'eval-source-map',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'), filename: 'bundle.js'
    },
    resolve: {
     extensions:   ['.js', '.jsx']
     },
     plugins:[
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
     devServer:{
        static: path.resolve(__dirname, 'dist'),
    },
   
    module:{
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }
}
