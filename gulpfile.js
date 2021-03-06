'use strict';

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var react = require('gulp-react');
var browserSync = require("browser-sync");
var babel = require('gulp-babel');
var browserify = require('gulp-browserify');

// deafult task
gulp.task('default', [], function(cb) {
  gulp.start('build', cb);
});

gulp.task('build', function () {
    return gulp.src(['src/**/*.jsx'])
        .pipe(sourcemaps.init())
        .pipe(react({
          es6module: true
        }))
        .pipe(babel({
          presets: ['es2015']
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('src'));
});

// Watch Files For Changes
gulp.task('watch', function () {
    gulp.watch(['src/**/*.jsx'], ['build']);
    gulp.watch(['src/**/*.js'], ['todo']);
});

gulp.task('browserify', function () {
    return gulp.src(['src/app.js'])
            .pipe(browserify())
            .pipe(gulp.dest('dist/scripts'));
});

gulp.task('todo', function () {
    return gulp.src(['src/todo.js'])
            .pipe(browserify())
            .pipe(gulp.dest('dist/scripts'));
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
