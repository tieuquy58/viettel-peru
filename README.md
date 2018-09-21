# [vBase HTML]()

A front-end was boilerplate for converting PSD/Sketch to HTML/CSS/JavaScripts It's focused on performance and best practices.

## Quick start

1. Run `yarn run setup` or `npm run setup` to install dependencies
2. Run `yarn run start` or `npm run start` and go to `http://localhost:8000`
3. Build `yarn run build` or `npm run build` and go to dist folder

## License

The code is available under the [MIT license](LICENSE.md)

## Buid min file css and js
#gulp.task('useref', ['views', 'styles', 'scripts'], () => {
#  return gulp.src(['app/*.html'])
#    .pipe($.useref({
#      searchPath: ['./app', './', 'bower_components']
#    }))
#    .pipe($.if(/\.js$/, $.uglify({
#    })))
#    .pipe($.if(/\.css$/, $.cssnano({
#      safe: true,
#      autoprefixer: false
#    })))
#    .pipe(gulp.dest('dist'));
#});