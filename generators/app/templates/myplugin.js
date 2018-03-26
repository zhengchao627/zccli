function MyPlugin(options) {
    // Configure your plugin with options...
}

MyPlugin.prototype.apply = function (compiler) {
    // console.log(compiler.hooks.compilation.tap);
    compiler.hooks.compilation.tap('myplugin', (compilation) => {
        console.log('The compiler is starting a new compilation...');
        compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tap(
            'html-webpack-plugin-before-html-processing',
            data => {
                console.log(data);
                //模版文件不插入
                // if(data.plugin.options.filename.indexOf('layout.html') != -1) return;

                const jsFiles = data.assets.js;
                const cssFiles = data.assets.css;
                let htmlContent = data.html;

                let scripts = '',
                    styles = '';

                jsFiles.map(jsFile => {
                    scripts += '<script type="text/javascript"  src="../' + jsFile + '"></script>';
                });
                cssFiles.map(cssFile => {
                    styles += '<link rel="stylesheet" type="text/css" href="../' + cssFile + '"/>';
                });
                htmlContent = htmlContent.replace("啊哈哈哈", "啊嘿嘿嘿");
                data.html = htmlContent;
            }
        )
    })
}

module.exports = MyPlugin