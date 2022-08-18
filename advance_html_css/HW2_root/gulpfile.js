

'usr strict'
const { parallel, series, watch , src, dest} = require('gulp');
const bs = require('browser-sync').create();
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require('gulp-autoprefixer');
// const gulpClean = require('gulp-clean');
const cleanCss = require('gulp-clean-css');
const concat = require('gulp-concat');
const imagemin = require ('gulp-imagemin');
const jsMin = require ('gulp-js-minify');
const gulpUglify = require ("gulp-uglify");

const serv =() => {
    bs.init({
        server:{
            baseDir:"./",
        },
        open: true,
    });
};

const scripts = (cb) => {
    src("./src/js/*.js")
        .pipe(concat('scripts.min.js'))
        .pipe(jsMin())
        .pipe(gulpUglify())
        .pipe(dest("dist/js/*.js"))
        .pipe(bs.stream());
    cb();
}

const styles =(cback) => {
    src("./src/styles/**/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(concat('all.css'))
        .pipe(cleanCss())
        // .pipe(gulpClean())
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
    watch("./src/js/*.js").on("change", series(scripts, bs.reload));
    watch("./src/styles/**/*.scss", styles);
    watch("./src/images/**/*.{jpg,jpeg,png,svg,webp}").on(
        "change",
        series(images, bs.reload)
    );
};

exports.default = parallel(serv, watcher, series(styles, images, scripts));







