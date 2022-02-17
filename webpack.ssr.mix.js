const mix = require('laravel-mix');
const webpackNodeExternals = require('webpack-node-externals');

mix.options({ manifest: false })
    .js('resources/js/ssr.js', 'public/js')
    .vue({
        version: 2,
        options: {
            optimizeSSR: true,
        },
    })
    .webpackConfig({
        target: 'node',
        externals: [webpackNodeExternals()],
    });