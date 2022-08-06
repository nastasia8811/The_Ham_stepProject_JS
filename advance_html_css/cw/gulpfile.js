'usr strict'
const { parallel, series, watch , src, dest} = require('gulp');
const bs = require('browser-sync').create();
const sass = require("gulp-sass")(require("sass"));
const serv =() => {
    bs.init({
        server:{
            baseDir:"./",
        },

        open: true,
    });
};

const scripts = (cb) => {
    src("./src/js/index.js")
        .pipe(dest("dist/js/index.js"))
        .pipe(bs.stream());
    cb();
}
const styles =(cb) => {
    src ("./src/styles/**/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(dest("dist/css")).pipe(bs.stream());
    cb();
}
const watcher =()=> {
    watch("*html").on("change", bs.reload);
    watch("./src/js/*.js").on("change", series(scripts, bs.reload));
    watch("./src/styles/**/*.scss", styles);
};
exports.default = parallel(serv, watcher, series(styles, scripts));