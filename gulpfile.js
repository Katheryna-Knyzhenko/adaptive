var gulp = require('gulp'),
    rimraf = require('rimraf'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass'),
    inlineimage = require('gulp-inline-image'),
    prefix = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    dirSync = require('gulp-directory-sync'),
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat');

// plugins for build
var purify = require('gulp-purifycss'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    csso = require('gulp-csso');

//plugins for testing
var html5Lint = require('gulp-html5-lint');