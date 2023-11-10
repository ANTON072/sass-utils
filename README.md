# sass-utils

お仕事で使う用のSassツールセット

- 👉 [functions](./scss/sass/functions/README.md)
- 👉 [mixins](./scss/sass/mixins/README.md)

## コードスタイル

基本的には[FLOCSS](https://github.com/hiloki/flocss)ベース。

```text
.
├── components FLOCSSのComponent
├── globals FLOCSSのFoundation
├── layouts FLOCSSのLayout
├── main.scss
├── pages FLOCSSのProject
├── sass Sassの変数、mixinや関数
└── utils FLOCSSのUtility
```

## FLOCSSと異なること

FLOCSSスタイル

```scss
.button {
  display: inline-block;
  padding: 0.5em 1em;
  cursor: pointer;
}
.button--primary {
  @extend .button
  background-color: #CCAA00;
  color: #ffffff;
}
.button--secondary {
  @extend .button
  background-color: #FFCC00;
}
```

こうする。  
[CUBE CSS](https://cube.fyi/)スタイルを取り入れる

```scss
.c-button {
  --text-color: #000;
  --bg-color: #fff;

  display: inline-block;
  padding: 0.5em 1em;
  color: var(--text-color);
  cursor: pointer;
  background-color: var(--bg-color);

  &[data-color="primary"] {
    --text-color: #fff;
    --bg-color: #007bff;
  }

  &[data-color="secondary"] {
    --text-color: #000;
    --bg-color: #fc0;
  }

  &[aria-disabled] {
    opacity: 0.5;
  }

  &[aria-selected="true"] {
    --text-color: #fff;
    --bg-color: #f00;
  }
}
```

BEMのModifierをdata属性やaria属性に変更する。
