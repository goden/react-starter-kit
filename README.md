# 前言
本專案作為筆者學習ReactJS的第一個學習專案，記錄重點與學習歷程。

# ReactJS 環境部署
其實ReactJS官網較推薦以Module Handler的形式來組織應用程式，像是Webpack。但是Webpack的功能強大而多樣，反而可能造成學習ReactJS的困擾。
所以在學習初期會採用local(或CDN)引入的方式來組織應用程式，e.g. `<script>`的方式。

採用local(CDN)實屬暫時的作法，為的是先了解ReactJS的精髓，而非初期就花費大量的精力學習Webpack或Gulp這類Module Handler的工具。採用Local的做法在專案上很容易會有版本相容性的議題，也會有程式碼較不易維護的情況，但好處是部署快速，對目前ReactJS的新手(也就是我) 暫不失為一個好的方案。

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
```
<script src="build/react.js"></script>
<script src="build/react-dom.js"></script>
```
* 引入babel-compiler的script
```
<script src="https://npmcdn.com/babel-core@5.8.38/browser.min.js"></script>
```
* 在body中指定節點要mount所謂React Component的地方， `<div id="example"></div>`

* 透過`babel`來compile `JSX`語法，babel會將其轉換成瀏覽器才懂的javascript語法。因此塞入以下程式碼後，整個ReactJS應用程式就算大功告成。
```
<script type="text/babel">
  ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('example')
  );
</script>
```
