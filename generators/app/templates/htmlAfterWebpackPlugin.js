function htmlAfterWebpackPlugin(options) {
    //打包的数据
    this.options = options;
}

function assetsHelp(arrs) {
    let css = [],
        js = [];
    const dir = {
        js: item => `<script src="${item}"></script>`,
        css: item => `<link rel="stylesheet" href="${item}"></link>`,
    }
    for (let jsitem of arrs.js) {
        js.push(dir.js(jsitem));
    }
    for (let cssitem of arrs.css) {
        css.push(dir.css(cssitem));
    }
    return {
        css,
        js
    }
}
htmlAfterWebpackPlugin.prototype.apply = function (compiler) {
    compiler.hooks.compilation.tap('htmlAfterWebpackPlugin', compilation => {
        compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tap(
            'htmlAfterWebpackPlugin',
            data => {
                let _html = data.html;
                const result = assetsHelp(data.assets);
                _html = _html.replace("<!--injectcss-->", result.css.join(""));
                _html = _html.replace("<!--injectscripts-->", result.js.join(""));
                data.html = _html;
            });
    })
};
module.exports = htmlAfterWebpackPlugin;