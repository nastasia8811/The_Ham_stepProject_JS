// import gulp from 'gulp';
// import dartSass from 'sass';
// import gulpSass from 'gulp-sass';
// import browserSync from 'browser-sync';
// // import autoprefixer from 'gulp-autoprefixer';
// // import gulpClean from 'gulp-clean';
// // import cleanCss from 'gulp-clean-css';
// // import imagemin from 'gulp-imagemin';
// // import concat from 'gulp-concat';
// // import minifyJs from 'gulp-js-minify';
// // import gulpUglify from 'gulp-uglify';
// // import sourcemaps from 'gulp-sourcemaps';
// // import babel from 'gulp-babel';
//
// const sass = gulpSass(dartSass);
// const bs = browserSync.create();
//
// const buildStyles = () => gulp.src('./src/styles/**/*.scss')
//     .pipe(sass())
//     .pipe(gulp.dest('./dist/css'));
//
//
// export const dev = gulp.series(buildStyles, () => {
//     bs.init({
//         server: {
//             baseDir: "./"
//         }
//     });
//     gulp.watch('./src/**/*', gulp.series(buildStyles, (done) => {
//         bs.reload();
//         done();
//     }));
// });

// // const minifyCss = () => gulp.src('./dist/css')
// //         .pipe(cleanCss())
// //         .pipe(gulp.dest('./dist/css'));
//
// const gulpCleanBuilt = () => gulp.src('./index.js')
//     .pipe(gulpClean({force: true}))
//     .pipe(gulp.dest('dist'));
//
// const pref = () => (gulp.src('src/**/*.css')
//         .pipe(cleanCss())
//         .pipe(autoprefixer())
//         .pipe(concat('all.css'))
//         .pipe(gulp.dest('dist'))
// );
//
// const imagesBuilt = () => (gulp.src('src/images/**/*.ipg')
//         .pipe(imagemin())
//         .pipe(gulp.dest('dist/images'))
// );
//
// const buildJs = () => (gulp.src('./dist/js'))
//     .pipe(minifyJs())
//     .pipe(gulp.dest('./dist/')
//     );
//

// const { src, dest, watch, series } = require("gulp");
//
//
// const moveCSS = () => {
//     return src("./src/styles/**/*.scss")
//         .pipe(dest("./dist/css/"));
// }
//
// const moveIMG = () => {
//     return src("./src/images/**/*.jpg")
//         .pipe(dest("./dist/images/"));
// }
//
// const moveJs = () => {
//     return src("./src/js/**/*.js")
//         .pipe(dest("./dist/js/"))
// }
//
// const watchers = () => {
//     watch('./src/css/*.css', moveCSS);
//     watch('./src/image/**/*.jpg', moveIMG);
//     watch('./src/js/**/*js', moveJs);
// }
//
// const dev = series(moveCSS, moveIMG, moveJs, watchers);
//
// // gulp.task("watchers", watchers);
// exports.watchers = watchers;
// exports.moveCSS = moveCSS;
// exports.moveIMG = moveIMG;
// exports.moveJs = moveJs;
// exports.dev = dev;



'usr strict'
const { parallel, series, watch , src, dest} = require('gulp');
const bs = require('browser-sync').create();
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require('gulp-autoprefixer');
// const gulpClean = require('gulp-clean');
const cleanCss = require('gulp-clean-css');
const concat = require('gulp-concat');
// const imagemin = import('gulp-imagemin')
// const imagemin = require ('gulp-imagemin');
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
        .pipe(dest("dist/css")).pipe(bs.stream())
    cback();
}

const images = (cb) => {
    src("./src/images/**/*.{jpg,jpeg,png,svg,webp}")
        // .pipe(imagemin())
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







