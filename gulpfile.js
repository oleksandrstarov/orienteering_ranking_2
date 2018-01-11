'use strict';

var gulp = require('gulp'),
    minifycss = require('gulp-clean-css'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    uglify = require('gulp-uglify'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    del = require('del'),
    ngannotate = require('gulp-ng-annotate');
    
    
gulp.task('jshint', function() {
  return gulp.src('app/scripts/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter(stylish));
});

// Clean
gulp.task('clean', function() {
    return del(['dist']);
});

// Default task
gulp.task('default', ['clean'], function() {
    gulp.start('usemin', 'imagemin', 'adminApp','copyfonts');
});

// Default task
gulp.task('debug', ['clean'], function() {
    gulp.start('copyFiles', 'imagemin', 'adminApp','copyfonts');
});



// admin
gulp.task('adminApp',['jshint'], function () {
  return gulp.src('./app/admin/*.html')
      .pipe(usemin({
        css:[rev()],
        js: [ngannotate(), rev()]
      }))
      .pipe(gulp.dest('dist/admin'));
});

gulp.task('copyFiles',['jshint'], function () {
  return gulp.src(['./app/**/*.html', '!./app/admin/*.html'])
      .pipe(usemin({
        css:[rev()],
        css_custom:[rev()],
        js: [ngannotate(),rev()],
        js_custom: [ngannotate(),rev()]
      }))
      .pipe(gulp.dest('dist/'));
});


gulp.task('usemin',['jshint'], function () {
  return gulp.src(['./app/**/*.html', '!./app/admin/*.html'])
      .pipe(usemin({
        css:[minifycss(),rev()],
        css_custom:[rev()],
        js: [ngannotate(),rev()],
        js_custom: [ngannotate(),uglify(),rev()]
      }))
      .pipe(gulp.dest('dist/'));
});

// Images
gulp.task('imagemin', function() {
  return gulp.src('app/images/**/*')
    .pipe(gulp.dest('dist/images'));
});

gulp.task('copyfonts', function () {
  return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('web', ['clean'], function () {
  gulp.start('usemin', 'imagemin', 'copyfonts');
});

