var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    del = require('del'),
    rename = require("gulp-rename");

gulp.task('client', function () {
    del([
        'gulp/*'
    ]);
    return gulp.src('js/*.js')
        .pipe(rename(function (path) {
            // Updates the object in-place
            // console.log(path);
            path.basename += '-gulp';
        }))
        .pipe(uglify())
        .pipe(gulp.dest('gulp'))
});