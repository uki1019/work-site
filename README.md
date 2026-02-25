# Portfolio Website - まつおゆうき

## 概要
このポートフォリオサイトは、日本企業向けに制作されたWebデザイナーの作品集です。
シンプルで洗練された日本的なデザインを採用しています。

## 特徴
- ✨ モダンで洗練された日本的デザイン
- 📱 完全レスポンシブ対応
- 🎨 スムーズなアニメーション効果
- 🖼️ 作品フィルタリング機能
- 📋 モーダルウィンドウでの詳細表示
- 🎯 直感的なナビゲーション

## 構成
```
作品集/
├── index.html          # メインHTMLファイル
├── style.css           # スタイルシート
├── script.js           # JavaScript機能
├── README.md           # このファイル
└── works/              # 作品画像フォルダ（作成してください）
    ├── work1.jpg
    ├── work1-1.jpg
    ├── work1-2.jpg
    └── ...
```

## セットアップ方法

### 1. 画像の準備
`works` フォルダを作成し、以下の画像を配置してください：

- **サムネイル画像**: `work1.jpg`, `work2.jpg`, ... (作品一覧用)
- **詳細画像**: `work1-1.jpg`, `work1-2.jpg`, ... (モーダル表示用)

推奨サイズ:
- サムネイル: 800×600px
- 詳細画像: 1200×900px

### 2. プロフィール写真
プロフィールセクション用の写真 `profile.jpg` をルートディレクトリに配置してください。

### 3. 個人情報の更新
`index.html` の以下の部分を編集してください：

- 名前（日本語・英語）
- メールアドレス
- 座右銘
- スキルレベル
- 経歴
- 資格

### 4. 作品データの更新
`script.js` の `worksData` 配列を編集して、あなたの作品情報を追加してください：

```javascript
{
    id: 1,
    title: "作品タイトル",
    category: "web", // web, branding, graphic, package, other
    year: "2024",
    thumbnail: "works/work1.jpg",
    images: ["works/work1-1.jpg", "works/work1-2.jpg"],
    description: "作品の説明文",
    tools: "使用ツール",
    duration: "制作期間",
    role: "担当範囲"
}
```

## カスタマイズ

### カラーテーマの変更
`style.css` の `:root` セクションでカラー変数を変更できます：

```css
:root {
    --primary-color: #8BA888;      /* メインカラー */
    --secondary-color: #4A6741;    /* サブカラー */
    --accent-color: #D4A373;       /* アクセントカラー */
    --text-dark: #2C2C2C;          /* テキスト（濃）*/
    --text-light: #666666;         /* テキスト（薄）*/
}
```

### フォントの変更
`style.css` の `body` セクションで `font-family` を変更できます。

## ブラウザ対応
- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)
- モバイルブラウザ

## 使用技術
- HTML5
- CSS3 (Grid, Flexbox, Animations)
- Vanilla JavaScript (ES6+)

## ライセンス
個人利用・商用利用ともに自由です。

## 制作者
Yuki Matsuo (まつおゆうき)

---

## 使い方

### ローカルで確認
1. `index.html` をブラウザで開く
2. または、ローカルサーバーを起動:
   ```bash
   # Pythonがインストールされている場合
   python -m http.server 8000
   # または
   python3 -m http.server 8000
   ```
3. ブラウザで `http://localhost:8000` にアクセス

### デプロイ
以下のサービスで無料でホスティングできます：
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting

## カスタマイズのヒント

### 作品カテゴリーの追加
1. `script.js` の `getCategoryName()` 関数に新しいカテゴリーを追加
2. `index.html` のフィルターボタンに新しいカテゴリーボタンを追加

### アニメーションの調整
`style.css` の `--transition` 変数で全体のアニメーション速度を調整できます。

### セクションの追加・削除
`index.html` で `<section>` タグを追加・削除し、対応するCSSを `style.css` に追加してください。

## トラブルシューティング

### 画像が表示されない
- ファイルパスが正しいか確認
- 画像ファイル名が `script.js` のデータと一致しているか確認
- 画像ファイルが存在するか確認

### レイアウトが崩れる
- ブラウザのキャッシュをクリア
- 開発者ツールでエラーを確認

### スクロールがスムーズでない
- `html { scroll-behavior: smooth; }` が有効か確認
- JavaScriptのエラーがないか確認

## お問い合わせ
質問や問題がある場合は、お気軽にご連絡ください。

---

**ご覧いただきありがとうございます！**
