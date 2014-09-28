var gulp = require('gulp'),
    rimraf = require('gulp-rimraf'),
    http = require('http'),
    ecstatic = require('ecstatic'),
    typescript = require('gulp-typescript')

var output = "static/"
var tsScriptFiles = "*.ts"
var staticAssetPaths = ["*.html", "*.jpg", "*.css", "*.js"];

gulp.task('default', ['clean'], function() {
    return gulp.start('watch');
});

gulp.task('clean', function() {
    return gulp.src(['!./' + output + '/.gitignore', output + "/*"], {read: false})
        .pipe(rimraf());
});

gulp.task('watch', ['compileTS', 'copyStaticAssets', 'serve'], function(done) {
    gulp.watch(tsScriptFiles, ['compileTS']);
    gulp.watch(staticAssetPaths, ['copyStaticAssets']);
    return done();
});

var tsProject = typescript.createProject({
    declarationFiles: false,
    noExternalResolve: false,
    module: "amd",
    target: "ES5"
});

gulp.task('compileTS', function() {
    var tsResult = gulp.src(tsScriptFiles)
        .pipe(typescript(tsProject));

    return tsResult.js
        .pipe(gulp.dest(output))
});

gulp.task('copyStaticAssets', function() { return copy(staticAssetPaths); });

gulp.task('serve', function(done) {
    http.createServer(ecstatic({ root: __dirname + "/static" })).listen(9999);
    return done();
});

function copy(source) {
    return gulp.src(source).pipe(gulp.dest(output));
}
