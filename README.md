# 前言
本專案作為筆者學習ReactJS的第一個學習專案，記錄重點與學習歷程。

# ReactJS 環境部署
其實ReactJS官網較推薦以Module Handler的形式來組織應用程式，像是Webpack。但是Webpack的功能強大而多樣，反而可能造成學習ReactJS的困擾。
所以在學習初期會採用local(或CDN)引入的方式來組織應用程式，e.g. `<script>`的方式。

採用local(CDN)實屬暫時的作法，為的是先了解ReactJS的精髓，而非初期就花費大量的精力學習Webpack或Gulp這類Module Handler的工具。採用Local的做法在專案上很容易會有版本相容性的議題，也會有程式碼較不易維護的情況，但好處是部署快速，對目前ReactJS的新手(也就是我) 暫不失為一個好的方案。

## Local引入部署
按照[ReactJS官網的範例](https://facebook.github.io/react/index.html)，採用版本為v15.3.1

1. 建立index.html
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
