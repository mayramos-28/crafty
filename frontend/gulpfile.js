/**
 * @file gulpfile.js
 * @version 1.0.0
 * @description Este archivo se encarga de compilar los archivos .scss a .css
 * @param {Object} gulp
 * @param {Object} sass
 * @param {Object} cleanCSS
 * @returns {Object}
 * 
 */

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');

gulp.task('sass', function(cb) {
  gulp
    .src('./src/assets/style/index.scss')
    .pipe(sass())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(
      gulp.dest(function(f) {
        return f.base;
      })
    );
  cb();
});

gulp.task(
  'default',
  gulp.series('sass', function(cb) {
    gulp.watch('./**/*.scss', gulp.series('sass'));
    cb();
  })
);