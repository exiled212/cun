(()=>{

	let	gulp	=	require('gulp')
	,	concat	=	require('gulp-concat')
	,	babel	=	require('gulp-babel')
	,	plumber	=	require('gulp-plumber')

	gulp.task('angularJs', function(cb){
		gulp
			.src([
				'./app/angular/*.js',
				'./app/angular/**/*.js',
				'./app/angular/**/**/*.js',
				'./app/angular/**/**/**/*.js',
				'./app/angular/**/**/**/**/*.js'
			])
			.pipe(concat('app.min.js'))
			.pipe(babel({presets: ['babili']}))
			.pipe(gulp.dest('./app/minifi/'))
	});

	gulp.task('libs', function(cb){
		gulp
			.src([
				'./app/libs/jquery/jquery.min.js', 
				'./app/libs/bootstrap/js/bootstrap.js', 
				'./app/libs/angular/angular.min.js', 
				'./app/libs/angular/angular-ui-router.min.js'
			])
			.pipe(concat('libs.min.js'))
			.pipe(babel({presets: ['babili']}))
			.pipe(gulp.dest('./app/minifi/'))
	});

	gulp.task('default', ['angularJs']);


})();