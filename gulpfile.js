var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');
var less = require('gulp-less');
var uglify = require('gulp-uglify');

gulp.task('browserify', function(){
	gulp.src('src/js/main.js')
		.pipe(browserify({transform: 'reactify'}))
		//.pipe(uglify())
		.pipe(concat('main.js'))
		.pipe(gulp.dest('dist/js'))
});

gulp.task('copy', function(){
	gulp.src('src/index.html')
		.pipe(gulp.dest('dist'));
});


gulp.task('browser-reload', function() {
	browserSync.reload();
});

gulp.task('less', function() {
	gulp.src('src/style.less')
		.pipe(less())
		.pipe(gulp.dest('dist/css'))
});

gulp.task('watch', function() {
	gulp.watch('src/**/*.*', ['browserify', 'copy']);
});

gulp.task('watch-bundle', function() {
	gulp.watch('dist/**/*.*', ['browser-reload']);
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: './dist'
		}
	});
});

gulp.task('default', ['browserify', 'copy', 'less', 'browser-sync', 'watch', 'watch-bundle']);
