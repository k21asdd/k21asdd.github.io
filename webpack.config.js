//webpack.config.js
const path = require("path");
const output = path.resolve(__dirname, "dist")


module.exports = {
    entry: './javascripts/main.js',
    output:{
        filename:"bundle.js",
        path: output,
    },
    mode:"development",
    devtool:"source-map",
}