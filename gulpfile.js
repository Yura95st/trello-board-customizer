var browserify = require("browserify"),
    buffer = require("vinyl-buffer"),
    del = require("del"),
    gulp = require("gulp"),
    gutil = require("gulp-util"),
    runSequence = require('run-sequence'),
    source = require("vinyl-source-stream"),
    sourcemaps = require("gulp-sourcemaps"),
    tsify = require("tsify"),
    uglify = require("gulp-uglify");

var config = {
    entrypoint: "./app/main.ts",
    bundleName: "bundle.js",
    outputDirPath: "./dist",
    assets: [
        "./images/**/*.png",
        "./manifest.json"
    ]
};

gulp.task("clean", function () {
    return del.sync(config.outputDirPath);
});

gulp.task("copy-assets", function () {
    return gulp.src(config.assets, { "base": "." })
        .pipe(gulp.dest(config.outputDirPath));
});

gulp.task("bundle", function () {
    return browserify({
        basedir: ".",
        debug: true,
        entries: [config.entrypoint],
        cache: {},
        packageCache: {}
    })
        .plugin(tsify)
        .bundle()
        .pipe(source(config.bundleName))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest(config.outputDirPath));
});

gulp.task("default", function (callback) {
    runSequence("clean", ["copy-assets", "bundle"], callback);
});

gulp.task("watch", function () {
    gulp.watch(config.assets, ["copy-assets"]);
    gulp.watch("**/*.ts", ["bundle"]);
});