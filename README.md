# 前言
本專案作為筆者學習ReactJS的第一個學習專案，記錄重點與學習歷程。

# ReactJS 環境部署
其實ReactJS官網較推薦以Module Handler的形式來組織應用程式，像是Webpack。但是Webpack的功能強大而多樣，反而可能造成學習ReactJS的困擾。
所以在學習初期會採用local(或CDN)引入的方式來組織應用程式，e.g. `<script>`的方式。

採用local(CDN)實屬暫時的作法，是為了先了解ReactJS，而非花費大量的精力學習Webpack或Gulp。採用Local/CDN做法，很容易有版本相容性的議題，亦有程式碼不易維護的情況，但好處是部署快，對ReactJS的新手(也就是我) 不失為一個好方案。

## Local/CDN 引入部署
按照[ReactJS官網的範例](https://facebook.github.io/react/index.html)，採用版本為v15.3.1

* 根目錄下建立`dist`與`src`目錄

* 建立`index.html`於`dist`目錄
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello React!</title>
  </head>
  <body>
  </body>
</html>
```

* 引入react.js與react-dom.js (需先行下載Starter Kit)並且放置於`dist/scripts``目錄
```html
<script src="scripts/react.js"></script>
<script src="scripts/react-dom.js"></script>
```

* 引入babel-compiler的script
```html
<script src="https://npmcdn.com/babel-core@5.8.38/browser.min.js"></script>
```

* 在body中指定節點要mount所謂React Component的地方， `<div id="example"></div>`

* 透過`babel`來compile `JSX`語法，babel會將其轉換成瀏覽器才懂的javascript語法。因此`<div id="example"></div>` 引入以下程式碼後，整個ReactJS應用程式就算大功告成。
```html
<script type="text/babel">
  ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('example')
  );
</script>
```

## Gulp
採用Gulp來建置React JSX為Javascript。在使用Gulp前，要確認系統已安裝NodeJS與NPM(安裝NodeJS亦會一併安裝NPM)。

* 專案根目錄執行`npm init`命令初始化專案並填妥相關資訊，爾後會產生`package.json`，內容如下：
```json
{
  "name": "react-starter-kit",
  "version": "1.0.0",
  "description": "My first ReactJS project for learning.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/goden/react-starter-kit.git"
  },
  "keywords": [
    "react",
    "jsx",
    "gulp",
    "babel"
  ],
  "author": "Goden Cheng",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/goden/react-starter-kit/issues"
  },
  "homepage": "https://github.com/goden/react-starter-kit#readme"
}
```

* 安裝gulp與gulp-react
```
npm install --save-dev gulp
npm install --save-dev gulp-react
npm install --save-dev gulp-sourcemaps
```

* 新增gulpfile.js並且新增下列內容:
```javascript

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var react = require('gulp-react');
var browserSync = require('browser-sync');

// default task
gulp.task('default', [], function(cb) {
  gulp.start('build', cb);
});

gulp.task('watch', function() {
  gulp.watch(['src/*'], ['build']);
});

// Live Reload
gulp.task('build', function () {
    return gulp.src('src/*.jsx')
        .pipe(sourcemaps.init())
        .pipe(react())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/scripts'));
});
```

* 執行`gulp build`指令，再重新refresh網頁就可以看到結果。

### BrowserSync
執行`npm install --save-dev browser-sync`命令執行安裝套件. BrowserSync作為一套同步工具，可以啟動系統預設的瀏覽器並且檢查CSS/HTML的變更即時同步至瀏覽器。

將`var browserSync = require('browser-sync');`加入至`gulpfile.js`中，並新增一組`browser`的task。
```javascript
...(code)...
var browserSync = require('browser-sync');
........

// Live Reload
gulp.task('browser', function (cb) {
    browserSync.init(null, {
        server: {
            baseDir: ['dist']
        },
        notify: false
    });
    gulp.watch([
        'dist/**/*.html',
        'dist/**/*.js',
        'dist/**/*.css'
    ], browserSync.reload);
});
```
執行 `gulp browser`, 便可以開啟預設瀏覽器檢視頁面。

### Gulp Babel
執行以下命令安裝Babel環境，安裝後可以使用ES2015(ES6)語法來撰寫下一代的javascript語言
```
npm install --save-dev gulp-babel babel-preset-es2015
```

更改`gulpfile.js`中`build`的task設定
```javascript
var babel = require('gulp-babel');
....
gulp.task('build', function () {
    return gulp.src('src/*.jsx')
        .pipe(sourcemaps.init())
        .pipe(react())
        .pipe(babel({
          presets: ['es2015']
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/scripts'));
});
....
```
