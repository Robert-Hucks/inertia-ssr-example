const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.options({ manifest: false })
    .js('resources/js/app.js', 'public/js')
    .vue({
        version: 2,
        options: {
            optimizeSSR: true,
        },
    });
