const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js')
//     .sass('resources/sass/app.scss', 'public/css');

mix.styles([
    "resources/adminlte/plugins/icheck-bootstrap/icheck-bootstrap.min.css",
    "resources/adminlte/dist/css/adminlte.min.css"
], 'public/css/app.css').js([
    "resources/adminlte/plugins/jquery/jquery.min.js",
    "resources/adminlte/plugins/bootstrap/js/bootstrap.bundle.min.js",
    "resources/adminlte/dist/js/adminlte.min.js",
], "public/js/app.js")