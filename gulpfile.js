var browserify = require("browserify");
var buffer = require("vinyl-buffer");
var gulp = require("gulp");
var gutil = require("gulp-util");
var source = require("vinyl-source-stream");
var sourcemaps = require("gulp-sourcemaps");
var tsify = require("tsify");
var uglify = require("gulp-uglify");
var watchify = require("watchify");

var watchedBrowserify = watchify(browserify({
    basedir: ".",
    debug: true,
    entries: ["app/main.ts"],
    cache: {},
    packageCache: {}
}).plugin(tsify));

function bundle() {
    return watchedBrowserify
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("dist"));
}

gulp.task("default", bundle);

watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", gutil.log);