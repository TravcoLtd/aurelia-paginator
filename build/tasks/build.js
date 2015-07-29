var gulp = require('gulp');
var runSequence = require('run-sequence');
var to5 = require('gulp-babel');
var merge = require('merge-stream');
var compilerOptions = require('../babel-options');

var assign = Object.assign || require('object.assign');

gulp.task('build', function () {
  var js = gulp.src('./src/**/*.js')
    .pipe(to5(assign({}, compilerOptions, {modules:'system'})))
    .pipe(gulp.dest('./dist'));
  var html = gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./dist'));
	return merge(js, html);
});