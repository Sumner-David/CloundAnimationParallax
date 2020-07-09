
    // -[] Sass compiler -
    // [] AutoPrefix the CSS -
    // [] Find a watch and reload


    const gulp = require("gulp");
    const sass = require("gulp-sass");
    sass.compiler = require('sass');
    const autoprefixer = require("gulp-autoprefixer");





    function scssCompile() {
        return gulp.src('./scss/main.scss', {allowempty : true})
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
    };

    function autoprefix() {
        return gulp.src('./css/main.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('./css'))
    }
    


    function watchFiles() {
        console.log("\r\n Watching Scss files \r\n");
        gulp.watch('./scss/*.scss', gulp.series(scssCompile, autoprefix));
    }

exports.styles = gulp.series(scssCompile,autoprefix);
exports.watch = watchFiles;
