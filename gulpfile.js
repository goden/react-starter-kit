var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var react = require('gulp-react');
var browserSync = require("browser-sync");

gulp.task('default', [], function(cb) {
  gulp.start('build', cb);
});

gulp.task('build', function () {
    return gulp.src('src/*.jsx')
        .pipe(sourcemaps.init())
        .pipe(react())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
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
