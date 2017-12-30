var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat');


/* gulp html */

gulp.task('html', function(){
  return gulp.src('app/*.html')
    .pipe(gulp.dest('dist/'))
});


/* gulp css */ 

gulp.task('css', function(){
  return gulp.src('app/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
});


/* gulp bootstrapCSS */
gulp.task('bootstrapCSS', function(){
  return gulp.src('bower_components/bootstrap/dist/css/bootstrap.min.css')
    .pipe(gulp.dest('dist/css'))
});


/* gulp vendors */
gulp.task('vendors', function(){
  return gulp.src(['bower_components/bootstrap/dist/js/bootstrap.min.js', 'bower_components/jquery/dist/js/jquery.min.js'])
    .pipe(concat('vendors.js'))
    .pipe(gulp.dest('dist/js'))
});

/* gulp app */

gulp.task('app', function(){
  return gulp.src('app/scripts/*.js')
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('dist/js'))
});

gulp.task('run', [ 'html', 'css', 'bootstrapCSS', 'vendors', 'app' ]);