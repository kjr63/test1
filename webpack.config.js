//console.log(__dirname);
const path = require('path');
module.exports = {
    entry: {
		app: "./public_html/jsx/app.jsx",
		blog: "./public_html/jsx/blog.jsx"
	},
    mode: "development",
    output: {
        path: path.join(__dirname, 'public_html', 'js'),
        filename: "[name].js"
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.jsx$/,
            exclude: /node_modules/
        }//, {
         //   test: /\.scss$/,
         //   use: "sass-loader"
        //}
        ]
    },
    devtool: "cheap-module-eval-source-map"
}