// //plugins for development
// var gulp, rimraf, jade, sass, inlineimage, prefix, plumber, dirSync, browserSync, concat;
// gulp = require('gulp');
// rimraf = require('rimraf');
// jade = require('gulp-jade');
// sass = require('gulp-sass');
// inlineimage = require('gulp-inline-image');
// prefix = require('gulp-autoprefixer');
// plumber = require('gulp-plumber');
// dirSync = require('gulp-directory-sync');
// browserSync = require('browser-sync').create();
// concat = require('gulp-concat');
//
// // plugins for build
// var purify, uglify, imagemin, pngquant, csso;
// purify = require('gulp-purifycss');
// uglify = require('gulp-uglify');
// imagemin = require('gulp-imagemin');
// pngquant = require('imagemin-pngquant');
// csso = require('gulp-csso');
//
// //plugins for testing
// var html5Lint = require('gulp-html5-lint');
//
// var bootstrapFolder = 'Bootstrap/';
// var mainPageFolder = 'MainPage/';
// var srcFolder = 'src/';
var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
function copyToCss (done) {
    gulp.src('./src/scss/learnGulp.scss')
        .pipe(sass({
            errorLogToConsole: false
        }))
        .on('error', console.error.bind(console))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./src/css/'));
done();
}

gulp.task(copyToCss);

