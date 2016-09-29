# 前言
本專案作為筆者學習ReactJS的第一個學習專案，記錄重點與學習歷程。

# ReactJS 環境部署
其實ReactJS官網較推薦以Module Handler的形式來組織應用程式，像是Webpack。但是Webpack的功能強大而多樣，反而可能造成學習ReactJS的困擾。
所以在學習初期會採用local(或CDN)引入的方式來組織應用程式，e.g. `<script>`的方式。

採用local(CDN)實屬暫時的作法，是為了先了解ReactJS，而非花費大量的精力學習Webpack或Gulp。採用Local/CDN做法，很容易有版本相容性的議題，亦有程式碼不易維護的情況，但好處是部署快，對ReactJS的新手(也就是我) 不失為一個好方案。

## Local/CDN 引入部署
按照[ReactJS官網的範例](https://facebook.github.io/react/index.html)，採用版本為v15.3.1

* 建立index.html
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

* 引入react.js與react-dom.js (需先行下載Starter Kit)
```html
<script src="build/react.js"></script>
<script src="build/react-dom.js"></script>
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
gulp.task('default', function () {
    return gulp.src('src/*.jsx')
        .pipe(sourcemaps.init())
        .pipe(react())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});
```

* 執行`gulp default`指令，再重新refresh網頁就可以看到結果。
