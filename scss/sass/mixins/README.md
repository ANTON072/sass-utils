# mixins

## media-query

ブレイクポイントの値を取得するmixin。  
ブレイクポイント名は `sm` `md` `lg` `xl` `xxl`

```scss
// スマートフォンやタブレットなどのモバイルデバイス用のスタイル
.example-class {
  font-size: 14px;
  padding: 10px;

  // ミディアムデバイス（md: 750px）以上のビューポートの場合のスタイル
  @include media-query("md") {
    font-size: 16px;
    padding: 15px;
  }

  // ラージデバイス（lg: 1920px）以上のビューポートの場合のスタイル
  @include media-query("lg") {
    font-size: 18px;
    padding: 20px;
  }

  // 数値でも指定が可能
  @include media-query("1000px") {
    font-size: 18px;
    padding: 20px;
  }
}
```

`$direction` 変数を 'max' にした場合

```scss
// 小さなデバイス用のスタイル（ミディアムデバイスよりも小さい場合）
@include media-query("md", "max") {
  .example-class {
    font-size: 12px;
    padding: 5px;
  }
}
```

## hover

hover に対応したデバイスのみにスタイルをあてるmixin。
focus 時にも同じスタイルがあたります。

input

```scss
.button--primary {
  @include hover() {
    opacity: 0.9;
  }
}
```

output

```css
.button--primary:focus {
  opacity: 0.9;
}
@media (hover: hover) and (pointer: fine) {
  .button--primary:hover {
    opacity: 0.9;
  }
}
```

## triangle

三角形を作るmixin

input

```scss
.sample {
  @include triangle(upward, 20px, 15px, #cd5c5c);
}
```

output

```css
.sample {
  border-style: solid;
  height: 0;
  width: 0;
  border-color: transparent transparent #cd5c5c transparent;
  border-width: 0 10px 15px 10px;
}
```
