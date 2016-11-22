var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('default', function() {
	return gulp.src('js/src/script.js')
		.pipe(babel())
		.pipe(gulp.dest('js/dist'));
});