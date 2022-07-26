// import gulp from 'gulp';
// import dartSass from 'sass';
// import gulpSass from 'gulp-sass';
// import browserSync from 'browser-sync';
//
// const sass = gulpSass(dartSass);
// const bs = browserSync.create();
//
// export const buildStyles = () => gulp.src('./src/styles/**/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest('./dist/css'));

const { src, dest, watch, series } = require("gulp");

const moveCSS = () => {
    return src("./src/styles/**/*.scss")
        .pipe(dest("./dist/css/"));
}

const moveIMG = () => {
    return src("./src/images/**/*.jpg")
        .pipe(dest("./dist/images/"));
}

const watchers = () => {
    watch('./src/styles/**/*.scss', moveCSS);
    watch('./src/images/**/*.jpg', moveIMG);
}

const dev = series(moveCSS, moveIMG, watchers);

// gulp.task("watchers", watchers);
exports.watchers = watchers;
exports.moveCSS = moveCSS;
exports.moveIMG = moveIMG;
exports.dev = dev;

