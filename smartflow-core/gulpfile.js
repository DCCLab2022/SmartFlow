var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var mocha = require('gulp-mocha');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');
var cp = require('child_process');
var tsb = require('gulp-tsb');


// compile less files from the ./styles folder
// into css files to the ./public/stylesheets folder
gulp.task('less', async function() {
    return gulp.src('./src/styles/**/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('./out/public/stylesheets'));
});


// run nodemon on server file changes
gulp.task('nodemon', async function(cb) {
  var started = false;

  return nodemon({
      script: 'out/www.js',
      watch: ['out/**/*.js']
  }).on('start', function() {
      if (!started) {
          cb();
          started = true;
      }
  }).on('restart', function onRestart() {
      setTimeout(function reload() {
          browserSync.reload({
              stream: false
          });
      }, 500); // browserSync reload delay
  });
});

// TypeScript build for /src folder 
var tsConfigSrc = tsb.create('src/tsconfig.json');
gulp.task('build', async function() {
  return gulp.src('./src/**/*.ts')
      .pipe(tsConfigSrc())
      .pipe(gulp.dest('./out'));
});

// watch for any TypeScript or LESS file changes
// if a file change is detected, run the TypeScript or LESS compile gulp tasks
gulp.task('watch',async function() {
  gulp.watch('src/**/*.ts', gulp.series(['build']));
  // gulp.watch('src/styles/**/*.less', ['less']);
});

// run mocha tests in the ./tests folder
gulp.task('test', async function() {
    return gulp.src('./tests/out/test*.js', { read: false })
        // gulp-mocha needs filepaths so you can't have any plugins before it 
        .pipe(mocha());
});

// run browser-sync on for client changes
gulp.task('browser-sync', gulp.series(['nodemon', 'watch'],async function() {
    browserSync.init(null, {
        open: false,
        proxy: "http://localhost:3000",
        files: ["out/**/*.*", "out/routes/**/*.*", "out/public/**/*.*", "out/views/**/*.*"],
        port: 7000,
    });
}));

gulp.task('buildAll', gulp.parallel(['build', 'less']));
gulp.task('default', gulp.parallel(['browser-sync']));