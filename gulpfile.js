const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const minifyCss = require('gulp-clean-css');
const renameCss = require('gulp-rename');

sass.compiler = require('node-sass');

// gulp创建任务
gulp.task('sass', function () {
	return gulp
		.src('./src/index.scss') // 编写的scss文件路径
		.pipe(sass().on('error', sass.logError)) //将scss编译成css
		.pipe(
			// 添加前缀
			autoprefixer({
				cascade: false,
			}),
		)
		.pipe(minifyCss()) //压缩css
		.pipe(renameCss('index.min.css')) //重命名压缩后的css
		.pipe(gulp.dest('./')); //压缩后的css存放位置
});


// 监听文件变化
gulp.task('sass:watch', function () {
	gulp.watch('./src/sass/*.scss', gulp.series('sass'));
});

// 默认
gulp.task('default', gulp.series('sass:watch'));

// 打包
gulp.task('build', gulp.series('sass'));
