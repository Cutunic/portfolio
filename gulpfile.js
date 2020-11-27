// Requires Gulp v4.
// $ npm uninstall --global gulp gulp-cli
// $ rm /usr/local/share/man/man1/gulp.1
// $ npm install --global gulp-cli
// $ npm install
const { src, dest, watch, series, parallel } = require('gulp');
const browsersync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const sasslint = require('gulp-sass-lint');
const cache = require('gulp-cached');
const notify = require('gulp-notify');
const beeper = require('beeper');
const eslint = require('gulp-eslint');
const minifyCSS = require('gulp-minify-css');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const minify = require('gulp-minify');


// Compile CSS from Sass.
function buildStyles() {
  return src('assets/sass/*.scss')
    .pipe(plumbError()) // Global error handler through all pipes.
    //.pipe(sourcemaps.init())    // this i need only if saas-lint is applied
    .pipe(sass().on('error', sass.logError)) // inside sass as parameter add Object { { outputStyle: 'compressed' } }
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7']))
    .pipe(sourcemaps.write())
    .pipe(dest('assets/css/'))
    .pipe(browsersync.reload({ stream: true }));
}

// format js using eslint
function lintJS() {
  return src(['assets/js/*.js'])
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint({ configFile: '.eslintrc.json'}))
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
}

// Watch changes on all *.scss files, lint them and
// trigger buildStyles() at the end.
function watchFiles() {
  // copy files on init to run server

  watch('assets/sass/*.scss',// { events: 'all', ignoreInitial: false },
    {  ignoreInitial: false },
    series(buildStyles, copyCSSToTmp) // before buildStyles {add sassLint,} if you want them compressed
  );
  watch( ['./assets/js/*.js', './components/*.js'],
    {  ignoreInitial: false },
    series( copyJSToTmp, copyJSComponentsToTmp) //lintJS
  );
  watch( './*.html', 
    {  ignoreInitial: false },
    series(copyHTMLToTmp)
  );

}

function copyHTMLToTmp() {
  return src('./*.html')
    .pipe(dest('../tmp/'));
}

function copyCSSToTmp() {
  return src('./assets/css/*.css')
    .pipe(dest('../tmp/assets/css/'));
}
function copyJSToTmp() {
  return src ('./assets/js/*.js')
    .pipe(dest('../tmp/assets/js/'))
}
function copyJSComponentsToTmp() {
  return src ('./components/*.js')
    .pipe(dest('../tmp/components/'))
}

// Init BrowserSync.
function browserSync() {
  browsersync.init({
    watch: true,
    socket: {
      domain: 'localhost:3000'
    },
    server: {
        baseDir: "../tmp/"
    }
  });
}


// Init Sass linter.
function sassLint() {
    return src(['assets/sass/*.scss', 'assets/sass/**/*.scss'])
      .pipe(cache('sasslint'))
      .pipe(sasslint({
        configFile: '.sass-lint.yml'
      }))
      .pipe(sasslint.format())
      .pipe(sasslint.failOnError());
}
  
// Error handler.
function plumbError() {
    return plumber({
      errorHandler: function(err) {
        notify.onError({
          templateOptions: {
            date: new Date()
          },
          title: "Gulp error in " + err.plugin,
          message:  err.formatted
        })(err);
        beeper();
        this.emit('end');
      }
    })
}
  
//Build distribution files
const dist = 
  series (
    buildStyles,
    parallel(
      copyHTMLToTmp,
      copyCSSToTmp,
      copyJSToTmp,
    ),
    minHTML,
    minCSS,
    minJS,
    minJSComponent

  )

function minCSS() {
  return src('../tmp/assets/css/*.css')
    .pipe(minifyCSS())
    .pipe(dest('../dist/assets/css/'))
};

function minJS() {
  return src('../tmp/assets/js/*.js')
    // This doesnt work, ES6 cant be uglified 
    //.pipe(babel())
    //.pipe(uglify())
    .pipe(minify({
      ext: {
        min: '.js' // Set the file extension for minified files to just .js
      },
      noSource: true
    }))
    .pipe(dest('../dist/assets/js/'))
};
function minJSComponent() {
  return src ('./components/*.js')
  .pipe(minify({
    ext: {
      min: '.js' // Set the file extension for minified files to just .js
    },
    noSource: true
  }))
    .pipe(dest('../dist/components/'))
}

function minHTML() {
  return src('../tmp/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
      }))
    .pipe(dest('../dist/'))
};

// Export commands.
exports.default = series( parallel(browserSync, watchFiles)); // $ gulp
exports.sass = buildStyles; // $ gulp sass
exports.watch = watchFiles; // $ gulp watch
//exports.build = series(buildStyles); // $ gulp build
exports.dist = dist;
