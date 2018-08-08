const path = require("path");
const MakeDirWebpackPlugin = require('make-dir-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
    mode:"production",
    entry: ["babel-polyfill","./src/main.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename:"bundle.js"
    },
    devServer:{
        contentBase: path.resolve(__dirname, "dist"),
        open:true
    }, 
    plugins: [
        new MakeDirWebpackPlugin({
            dirs: [
                { path: './dist' },
                { path: './src/components' }
            ]
        }),
        new CopyWebpackPlugin([
            {
              from: 'src/index.html',
              to: 'index.html',
              toType: 'file'
            },
          ])
    ],
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options:{
                        presets: ["env"]
                    }
                }
            }
        ]
    }
}