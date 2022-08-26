const gulp = require('gulp');
const less = require('gulp-less');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const del = require('del');               // 清空目录
const connect = require('gulp-connect'); // 服务
const htmlmin = require('gulp-htmlmin'); //html压缩

const buildCoreJs = require('./scripts/build-js.js');
const paths = {
    styles: {
        src: 'src/test/less',
        dest: 'build/css'
    },
    scripts: {
        src: ['src/test/js/root.js'],
        dest: 'build/js'
    },
    html: {
        src: 'src/test/html/*.html',
        dest: 'build'
    },
    libs: {
        src: 'src/libs/*.min.js',
        dest: 'build/js'
    },
    miniAsset: {
        src: 'src/asset/',
        dest: 'build/libs/asset/'
    },
    miniCss: {
        src: 'src/less',
        dest: 'build/libs/css'
    },
}

gulp.task('styles', async () => {
    await gulp.src(paths.styles.src+'/root.less')
        .pipe(less())
        .pipe(cleanCSS())
        .pipe(rename({
            basename: 'root',
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(connect.reload())
});
gulp.task('scripts', async () => {
    await gulp.src(paths.scripts.src, { sourcemaps: true })
        .pipe(babel())
        .pipe(uglify())
        .pipe(concat('root.min.js'))
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(connect.reload())
});
gulp.task('html', async () => {
    await gulp.src(paths.html.src)
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest(paths.html.dest))
        .pipe(connect.reload())
});

gulp.task('libs', async () => {
    await gulp.src(paths.libs.src)
        .pipe(gulp.dest(paths.libs.dest))
        .pipe(connect.reload())
});
gulp.task('core-js', async () => {
    await buildCoreJs();
    await connect.reload();
})
gulp.task('core-asset', async () => {
    await gulp.src(paths.miniAsset.src + '*.*')
        .pipe(gulp.dest(paths.miniAsset.dest))
});
gulp.task('core-css', async () => {
    await gulp.src(paths.miniCss.src+'/root.less')
        .pipe(less())
        .pipe(cleanCSS())
        .pipe(rename({
            basename: 'mini',
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.miniCss.dest))
        .pipe(connect.reload())
});
gulp.task('watch', function(){
    gulp.watch(['src/less/**/*.less'], gulp.series('core-css'));
    gulp.watch(['src/js/**/*.js'], gulp.series('core-js'));
});
gulp.task('watchTest', function(){
    gulp.watch(paths.scripts.src, gulp.series('scripts'));
    gulp.watch(paths.styles.src+'/*.less', gulp.series('styles'));
    gulp.watch(paths.html.src, gulp.series('html'));
    gulp.watch(paths.libs.src, gulp.series('libs'));
});
//服务
gulp.task('connect', function () {
    connect.server({
        root: "build",
        port: 8083,
        host:'0.0.0.0',
        // debug: true,
        livereload: true,
    });
});
gulp.task('clean', async() => {
    await del(['build/*']);
});
//启动开发环境 gulp.series是顺序执行 gulp.parallel是同步执行
gulp.task('dev', gulp.series(gulp.parallel('watch','watchTest', 'connect')));
gulp.task('build', gulp.series('clean', gulp.parallel('styles', 'core-asset', 'core-css','core-js', 'scripts','libs', 'html')));