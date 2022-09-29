'use strict'
const { parallel, series, watch , src, dest} = require('gulp');
const bs = require('browser-sync').create();
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require('gulp-autoprefixer');
const gulpClean = require('gulp-clean');
const cleanCss = require('gulp-clean-css');
const concat = require('gulp-concat');
const imagemin = require ('gulp-imagemin');
const jsMin = require ('gulp-js-minify');
const gulpUglify = require ("gulp-uglify");
const clean = require("gulp-clean");

const serv =() => {
    bs.init({
        server:{
            baseDir:"./",
        },
        open: true,
    });
};

const scripts = (cb) => {
    src("./src/scripts/*.js")
        .pipe(concat('styles.min.js'))
        .pipe(jsMin())
        .pipe(gulpUglify())
        .pipe(dest("dist/scripts"))
        .pipe(bs.stream());
    cb();
}

const styles =(cback) => {
    src("./src/styles/**/*.scss")

        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(concat('styles.min.css'))
        .pipe(cleanCss())
        .pipe(gulpClean())
        .pipe(dest("dist/css")).pipe(bs.stream())
    cback();
}

const images = (cb) => {
    src("./src/images/**/*.{jpg,jpeg,png,svg,webp}")
        .pipe(imagemin())
        .pipe(dest("./dist/images"));
    cb()
};

const watcher =()=> {
    watch("*html").on("change", bs.reload);
    watch("./src/scripts/*.js").on("change", series(scripts, bs.reload));
    watch("./src/styles/**/*.scss", styles);
    watch("./src/images/**/*.{jpg,jpeg,png,svg,webp}").on(
        "change",
        series(images, bs.reload)
    );
};

function cleanImg() {
    return src('dist/images/', {allowEmpty: true})
        .pipe(clean())
}

function cleanDist() {
    return src('dist', {allowEmpty: true})
        .pipe(gulpClean())
}

exports.build = series(cleanDist, styles, images, scripts);

exports.images = images;
exports.cleanImg = cleanImg;
exports.default = parallel(serv, watcher, series(styles, images, scripts));







