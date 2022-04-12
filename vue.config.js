const path = require('path')
const pkg = require('./package.json')
function resolve(dir) {
    return path.join(__dirname, '.', dir)
}
process.env.SWAIN_UI_VERSION = pkg.version
process.env.SWAIN_UI_ENV = 'development'
module.exports = {
    productionSourceMap: false,
    lintOnSave:false,
    pages: {
        index: {
            entry: 'examples/main.ts',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    configureWebpack: {
        performance: {
            hints: false
        },
        resolve: {
            alias: {
                '@': resolve('examples')
            }
        },
        output: {
            library: 'SwainUi'
        }
    },
}