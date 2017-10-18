# Use Browser Information

![IE 9以上](https://img.shields.io/badge/IE-9+-green.svg)
![IE Edge 最新版](https://img.shields.io/badge/IE%20Egde-Latest-green.svg)
![Google Chrome 最新版](https://img.shields.io/badge/Google%20Chrome-Latest-green.svg)
![Mozilla Firefox 最新版](https://img.shields.io/badge/Mozilla%20Firefox-Latest-green.svg)
![Safari 最新版](https://img.shields.io/badge/Safari-Latest-green.svg)
![iOS 7以上](https://img.shields.io/badge/iOS-7+-green.svg)
![Android 4.4以上](https://img.shields.io/badge/Android-4.4+-green.svg)

ブラウザの情報をHTMLのクラスとして追加しつつ、JavaScriptでも確認可能にしたライブラリ。<br>
[Browzection 2](https://github.com/artprojectteam/browzection2)のバージョンアップ版。

ブラウザやデバイスを取得し該当しない情報の場合には`no-`接頭辞を付与(JSの場合はboolean値)。<br>
取得可能な情報は[デモサイト](http://demo.artprojectteam.jp/use-browser/)を参照。

## Use Browser

**HTMLの記述**
```html
<script src="dist/use_browser.js"></script>
<!-- or -->
<script src="dist/use_browser.min.js"></script>
```

**CSSでの利用**
```css
.foo {
  color: #000000;
}
.no-desktop .foo {
  color: #cc0000;
}
.desktop .foo:hover {
  color: #cc0000;
}
```

**JavaScript内での使用**
```javascript
if(UseBrowser.browser.msie){
  // 何か処理
}
```

## Use npm install

```
npm i -D use-browser
```

**import**
```javascript
import UseBrowser from 'use-browser'
```

