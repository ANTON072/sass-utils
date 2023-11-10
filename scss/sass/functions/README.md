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
