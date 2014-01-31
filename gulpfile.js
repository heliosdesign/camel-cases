var gulp = require('gulp');
var gutil = require('gulp-util');
var compass = require('gulp-compass');
var livereload = require('gulp-livereload');
var lr = require('tiny-lr');
var server = lr();

gulp.task('compass', function(){
  gulp.src(['sass/*.sass', 'sass/**/*.sass'])
    .pipe(compass({
      css: 'css',
      style: 'nested'
    }))
});

gulp.task('css', function(){
  gulp.src('_site/css/*.css')
    .pipe(livereload(server));
});

gulp.task('livereload', function(){
  server.listen(35729, function(err){
    if(err) return console.log(err);
  });
});

gulp.task('watch', function(){

  gulp.run('livereload', 'css');

  gulp.watch(['sass/*.sass', 'sass/**/*.sass'], function(){
    gulp.run('compass');
  });

  gulp.watch('_site/css/*.css', function(){
    gulp.run('css');
  });

});

gulp.task('default', function(){
  // place code for your default task here
});