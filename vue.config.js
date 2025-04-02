process.env.VUE_APP_VERSION = process.env.npm_package_version;

module.exports = {
    productionSourceMap: false,
    outputDir: './dist/',
    assetsDir: 'public',
    publicPath: '',
    // eslint-disable-next-line no-undef
    pages: {"index":{"entry":"src/_front/main.js","template":"public/front.html","filename":"./index.html","lang":"en","title":"","cacheVersion":14,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n<script src=\"https://cdn.weweb.io/weweb-runtime.js\"></script>\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://87f2db50-a21d-4ef6-afdc-1ab7f71670a5.weweb-preview.io/"},{"rel":"alternate","hreflang":"en","href":"https://87f2db50-a21d-4ef6-afdc-1ab7f71670a5.weweb-preview.io/"}],"chunks":["chunk-vendors","chunk-common","index"]}},
    configureWebpack: config => {
        config.module.rules.push({
            test: /\.mjs$/,
            include: /node_modules/,
            type: 'javascript/auto',
        });
        config.performance = {
            hints: false,
        };
    },
};
