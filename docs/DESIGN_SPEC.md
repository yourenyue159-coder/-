# BARCELONA (barcelona.co.jp) デザイン解析仕様書

トップページ（グループポータル）の抽出結果。オリジナルサイト構築のベースとして使用。

## 1. 全体構造
- `body.wrap` は `display:flex; flex-flow:column; min-height:100dvh`（フッターを最下部に固定するスティッキーフッター構成）
- 構成: `header.home-header`（中央ロゴ） → `main`（2枚のブランドカード） → `footer.footer-home`（ダーク）
- ライブラリ: jQuery 3.4.1 / Swiper 8.3.1 / WOW.js 1.1.2（スクロール時 fadeInUp）/ animate.css / GTM
- レスポンシブ: モバイルファースト。SP `max-width:768px`、PC `min-width:1025px`

## 2. カラートークン
| 用途 | 値 |
|------|-----|
| 背景（メイン） | `#ffffff` |
| 本文テキスト | `#251e1c` |
| リンク | `#222222` |
| アクセント/CTA（公式サイトボタン） | `#22ba4f`（緑） |
| ブランドグリーン（他ページ） | `#008847` / グラデ `#008842→#31c218` |
| 採用ボタン | `#393c4a`（濃グレー） |
| フッター背景 | `#202026`（ほぼ黒） |
| フッターテキスト | `#7f7f89`（グレー） |
| フォーム背景 | `#f3f4f4` |
| アラート | `#df321b` |

## 3. タイポグラフィ
- 英字（見出し・ロゴ・ラベル）: `"Montserrat", sans-serif`（100〜900 可変）
- 英字サブ: `"DM Sans", sans-serif`
- 和文: 游ゴシック系 `"游ゴシック体", YuGothic, "Yu Gothic Medium", "Hiragino Sans", sans-serif`
- `letter-spacing: 0.1em`（本文）/ `0.05em`（カード名）, `font-feature-settings:"palt"`
- ブランド名（カード内）: Montserrat / `text-transform:uppercase` / span 32px(SP)〜40px(PC)、太さ 200（極細）

## 4. レイアウト詳細（トップ）
### ヘッダー
- 中央寄せ、ロゴ幅 234px(SP)/334px(PC)、padding `64px 0 54px`(SP)/`72px 0 68px`(PC)

### ブランドカード（home-group-list）
- グリッド: `grid-template-columns:1fr`(SP) / `repeat(2,1fr)`(PC), gap `40px 0`(SP)/`80px 24px`(PC)
- 画像: アスペクト比 `padding-top:87.2%`, `object-fit:cover`, `border-radius:6px`（PCのみ item-main を overflow:hidden）
- 名前オーバーレイ: `position:absolute; bottom:0`, 下方向グラデ `linear-gradient(0deg, rgba(0,0,0,.32), transparent)`, 白文字, padding `56px 20px 24px`(SP)/`32px`(PC, flexで両端揃え)
- 「公式サイト」ボタン: 緑 `#22ba4f`, `border-radius:50em`, 右に矢印アイコン(::after), SPは全幅 / PC は名前ブロック右下に配置
- 採用ボタン（2個並列）: `#393c4a`, 幅50%ずつ, ピル型

### フッター（footer-home, ダーク #202026）
- PC: `display:flex; justify-content:space-between`（ロゴ＋タグライン / サイトナビ複数列 / SNS）
- ロゴ白（logo-w.svg）＋ タグライン「人生に、挑戦を。挑戦に、賞賛を。」
- ナビ: 「札幌・すすきの」「福岡・中洲」見出し＋リンク列、リンク末尾に矢印アイコン
- サブナビ: 会社概要 / 専門コラム / 反社会的勢力〜 / 個人情報保護方針
- SNS: Instagram / YouTube / TikTok（SVGアイコン 30px前後）
- コピーライト: `Copyright ©BARCELONA. All Rights Reserved.`（Montserrat）

## 5. インタラクション
- `a, button` hover: `opacity:0.8`（transition 0.2s, PCのみ）
- スクロールイン: WOW.js の `fadeInUp`（translateY(25〜50px)→0, opacity 0→1）, duration 0.5s, delay 段階付け
- ボタン: ピル型 `border-radius:50em`, 矢印 SVG を `::after` で右側配置

## 6. 抽出アセット一覧（参照のみ・再利用しない）
- ロゴ: `logo_barcelona_group.svg`, `logo-w.svg`
- 画像: `img_susukino.jpg`/`_sp.jpg`, `img_nakasu.jpg`/`_sp.jpg`（キャスト写真＝著作権あり）
- アイコン: `icn-ig-g.svg`, `icn-yt-g.svg`, `icn-tt-g.svg`, `arw-next-s-w.svg`, `arw-next-s-gry.svg`
- CSS: `config.css`(リセット+ユーティリティ), `layout.css`(全ページレイアウト)
- JS: `script.js`

## 7. デザインの要点（オリジナルに継承すべき本質）
1. **余白の大きいミニマル構成** + 大判写真（ポートレート）主役
2. **モノクロ基調 ＋ 単一のグリーンアクセント**（CTAのみ色を使う）
3. **極細ウェイトの大型英字（Montserrat）** で洗練感
4. **ピル型ボタン**＋矢印アイコン、ホバーは透過のみ
5. **白の本体 ＋ 黒に近いダークフッター**のコントラスト
6. スクロールで要素が下からふわっと出る（fadeInUp）
</content>
</invoke>
