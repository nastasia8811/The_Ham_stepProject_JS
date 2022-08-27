const { parallel, series, watch, src, dest } = require('gulp');
// const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const clean = require('gulp-clean');

const serv = (done) => {
    browserSync.init({
        server: {
            baseDir: './',
        },
        notify: false,
        online: true,
        browser: 'chrome',
        open: true,
    });
};

// function serv () {
//     browserSync.init({ // Инициализация Browsersync
//         server: { baseDir: 'src/' }, // Указываем папку сервера
//         notify: false, // Отключаем уведомления
//         online: true // Режим работы: true или false
//     })
// }

const scripts = (cb) => {
    src('./src/js/**/*.js')
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(dest('./src/js'))
        .pipe(dest('./dist/js'))
        .pipe(browserSync.stream());
    cb();
};

const styles = (cb) => {
    src('./src/styles/style.scss')
        .pipe(sass())
        .pipe(concat('styles.min.css'))
        .pipe(autoprefixer({ overrideBrowserslist: ['last 10 version'], grid: true }))
        .pipe(cleanCSS(( { level: { 1:{ specialComments: 0 } } } )))
        .pipe(dest('./src/css'))
        .pipe(dest('./dist/css'))
        .pipe(browserSync.stream());
    cb();
};

const images = (cb) => {
    src('./src/img/**/*.{jpg,jpeg,png,svg,webp}')
        .pipe(imagemin())
        .pipe(dest('./src/img/dest'));
    cb();
};

function cleanImg() {
    return src('./src/img/dest/', {allowEmpty: true})
        .pipe(clean());
}

const watcher = () => {
    watch('*.html').on('change', browserSync.reload);
    watch(['./src/js/**/*.js', '!./src/js/**/*min.js'])
        .on('change', series(scripts, browserSync.reload));
    watch('./src/styles/**/*.scss', styles);
    watch('./src/img/**/*.{jpg,jpeg,png,svg,webp}', images);
};

const cleanDist = (cb) => {
    src('./dist', {allowEmpty: true})
        .pipe(clean());
    cb();
};

const buildCopy = (cb) => {
    src([
        'src/css/**/*.min.css',
        'src/js/**/*.min.js',
        'src/img/**/*',
    ], { base: './src' })
        .pipe(dest('./dist'));
    cb();
};

exports.serv = serv;
exports.scripts = scripts;
exports.styles = styles;
exports.watcher = watcher;
exports.images = images;
exports.cleanImg = cleanImg;
exports.cleanDist = cleanDist;
exports.buildCopy = buildCopy;


exports.dev = parallel(serv, watcher, styles, scripts);
exports.build = series(cleanDist, cleanImg, styles, scripts, images, buildCopy);
exports.default = parallel(serv, watcher, series(cleanDist, cleanImg, styles, scripts, images, buildCopy));