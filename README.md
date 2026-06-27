# LUMINA — 夜に灯る、二つの部屋。

これはスマホからの練習用である。

[barcelona.co.jp](https://www.barcelona.co.jp/) のトップページのデザインを解析し、
それをベースに**ゼロから再構築したオリジナルの**グループポータルサイト雛形です。
さらに `frontend-design` スキルの指針で、テンプレ然としない独自の意匠へブラッシュアップしました。
写真・文言・コードはすべてオリジナルで、原サイトの素材は一切使用していません。

## コンセプト
ブランド名 **LUMINA = 光**。深夜のラウンジを舞台に、**闇の中に灯る二つの扉**
（東京・銀座＝暖色の灯り／大阪・北新地＝月色の灯り）を選んで「入る」体験を core にしています。

- **Signature**：細く開いた扉から光が漏れ、ホバー／フォーカスで**扉が開き光が満ちる**（= enter）
- ワードマークの **「I」が灯り**として点灯（ページロード時）
- 2拠点を連番ではなく**光の温度**で区別（構造に意味を持たせる）

## 特徴
- **素のHTML / CSS / JS**（ビルド不要・`index.html` を開くだけ）
- 夜想的なダークパレット ＋ 暖色／月色の灯り
- タイポ：**Fraunces**（display）/ **IBM Plex Mono**（ラベル）/ **Shippori Mincho**（和文）
- 動き：ロード点灯＋スクロール `fadeInUp`＋ホバー開扉（`IntersectionObserver`・依存ゼロ）
- レスポンシブ（≥900pxで2カラム）／`:focus-visible` リング／`prefers-reduced-motion` 尊重

## 構成
```
.
├─ index.html              … トップ（ポータル）
├─ assets/
│  ├─ css/base.css         … リセット＋デザイントークン（:root変数）
│  ├─ css/style.css        … レイアウト＋signature（灯りの扉）
│  └─ js/main.js           … ロード点灯／スクロール表示
└─ docs/
   ├─ DESIGN_SPEC.md       … 原サイト(barcelona.co.jp)のデザイン解析
   └─ DESIGN_NOTES.md      … 本サイトの意匠判断の記録
```

## カスタマイズ
- **ブランド名**：`index.html` の `.brand` を変更（`.flame` の文字が灯る）
- **灯りの色**：`assets/css/base.css` の `--gold` / `--moon` を変更
- **拠点の追加**：`index.html` の「▼ 拠点 ▼」ブロックをコピー（`is-cool` で月色に）
- **実写真化**：`.door` 内に画像を置き、`.door__glow` を写真の上に重ねる

## ローカルプレビュー
```bash
python3 -m http.server 8000
# → http://localhost:8000/
```

---
※ 本リポジトリは barcelona.co.jp の**デザイン傾向を参考にした学習用の再構築**であり、
同社のHTML/CSS・画像・文章等を複製・転載したものではありません。
