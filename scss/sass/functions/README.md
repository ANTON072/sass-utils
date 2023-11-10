# functions

## px2rem

pxをremに変換する関数

input

```scss
.sample {
  font-size: px2rem(40px);
}
```

output

```css
.sample {
  font-size: 2.5rem;
}
```

## px2vw

pxをビューポートの幅に基づいた相対的なサイズ（vw）に変換する関数

input

```scss
.sample {
  font-size: px2vw(20px);
}
```

output

```css
.sample {
  font-size: 5.33vw;
}
```

## fluid-size

流動的なサイズを計算する関数

input

```scss
.sample {
  font-size: fluid-size(16px, 100px);
}
```

output

```css
.sample {
  font-size: clamp(1rem, 20.19vw + -6.27rem, 6.25rem);
}
```

ブレークポイント引数に$screen文字列を使うことも可能。

```scss
.sample {
  font-size: fluid-size(16px, 100px, "sm", "xxl");
}
```

ブレークポイントにpx数を指定することも可能。

```scss
.sample {
  font-size: fluid-size(16px, 100px, 100px, 2000px);
}
```

## line-height

FigmaやXDのライン高の値を基にline-heightを計算する関数

input

```scss
.sample {
  line-height: line-height(32px, 57px);
}
```

output

```css
.sample {
  line-height: 1.78;
}
```
