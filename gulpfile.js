"use strict";
let gulp = require("gulp"),
  sassLint = require("gulp-sass-lint"),
  sass = require("gulp-sass");

//Gulp task for lint SCSS
gulp.task("sass-lint", function() {
  console.log("ssss");
  return gulp
    .src("src/**/*.s+(a|c)ss")
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
});

//Gulp SCSS/SASS compiler
sass.compiler = require("node-sass");

//Gulp task sass/scss to dist
gulp.task("sass", function() {
  return gulp
    .src("src/**/*.s+(a|c)ss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./dist"));
});

gulp.task("default", gulp.parallel('sass-lint', 'sass'));
