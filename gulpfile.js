'use strict';

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var react = require('gulp-react');
var browserSync = require("browser-sync");
var babel = require('gulp-babel');


// deafult task
gulp.task('default', [], function(cb) {
  gulp.start('build', cb);
});

gulp.task('build', function () {
    return gulp.src('src/*.jsx')
        .pipe(sourcemaps.init())
        .pipe(react())
        // .pipe(babel({
        //   presets: ['es2015']
        // }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/scripts'));
});

// Watch Files For Changes
gulp.task('watch', function () {
    gulp.watch(['src/*'], ['build']);
});

gulp.task('browser', function (cb) {
    browserSync.init(null, {
        server: {
            baseDir: ['dist']
        },
        notify: false
    });
    gulp.watch([
        'dist/**/*.html',
        'dist/**/*.js',
        'dist/**/*.css'
    ], browserSync.reload);
});
