var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var react = require('gulp-react');

gulp.task('default', function () {
    return gulp.src('src/*.jsx')
        .pipe(sourcemaps.init())
        .pipe(react())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});
