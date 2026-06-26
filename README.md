# LUMINA — グループポータル雛形

これはスマホからの練習用である。

[barcelona.co.jp](https://www.barcelona.co.jp/) のトップページのデザイン言語を解析し、
それをベースに**ゼロから再構築したオリジナルの**グループポータルサイト雛形です。
写真・文言・コードはすべてオリジナルで、原サイトの素材は一切使用していません。

## 特徴
- **素のHTML / CSS / JS**（ビルド不要・`index.html` を開くだけ）
- 白基調 ＋ 単一グリーンアクセント、Montserrat の極細英字、ダークフッター
- 大判カード＋名前オーバーレイ＋ピル型CTA（公式サイト／採用／お問い合わせ）
- スクロールで `fadeInUp`（IntersectionObserver・依存ゼロ）
- モバイルファースト（SP 1列／PC 2列グリッド）
- レスポンシブ：`min-width:1025px` でPCレイアウトに切替

## 構成
```
.
├─ index.html              … トップ（ポータル）
├─ assets/
│  ├─ css/base.css         … リセット＋デザイントークン（:root変数）
│  ├─ css/style.css        … レイアウト
│  ├─ js/main.js           … スクロール表示アニメ
│  └─ img/arrow.svg        … 矢印アイコン
└─ docs/DESIGN_SPEC.md     … 原サイトのデザイン解析仕様書
```

## 使い方・カスタマイズ
- **ブランド名**：`index.html` の `.logo` / `.wordmark` を変更（`.mark` の文字にアクセント色が付く）
- **ブランドカラー**：`assets/css/base.css` の `:root { --accent }` を変更するだけ
- **カードの追加**：`index.html` の「▼▼ カード ▼▼」ブロックをコピー
- **画像の差し替え**：`.visual`（擬似ビジュアル）を `<img>` に置き換え

## ローカルプレビュー
```bash
python3 -m http.server 8000
# → http://localhost:8000/
```

---
※ 本リポジトリは barcelona.co.jp の**デザイン傾向（レイアウト・配色・タイポグラフィ）を参考にした学習用の再構築**であり、
同社のHTML/CSS・画像・文章等を複製・転載したものではありません。
