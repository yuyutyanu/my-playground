# Coffie House — 技術検証リポジトリ

Next.js + Supabase + Stripe を使った Web アプリの技術検証用プロジェクト。
コーヒーショップのランディングページをベースに、認証・サブスクリプション決済の実装を検証する。

## 検証内容

| 機能 | 技術スタック |
|---|---|
| ランディングページ | Next.js 16 / Tailwind CSS v4 |
| Google OAuth ログイン | Supabase Auth |
| 月額サブスクリプション | Stripe Checkout |
| Webhook によるサブスク状態管理 | Stripe Webhook + Supabase |
| デザインファイル | Pencil (.pen) |

## 技術スタック

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Auth / DB**: Supabase
- **Payment**: Stripe
- **Deploy**: Vercel

## セットアップ

### 1. 依存関係インストール

```bash
npm install
```

### 2. 環境変数の設定

`.env.local` を作成して以下を設定：

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...

STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_PRICE_ID=price_...
```

### 3. Supabase テーブル作成

Supabase の SQL Editor で `supabase/migrations/001_subscriptions.sql` を実行する。

### 4. 開発サーバー起動

```bash
# Stripe Webhook の転送（別ターミナル）
stripe listen --forward-to localhost:3000/api/stripe/webhook

# 開発サーバー
npm run dev
```

`http://localhost:3000` を開く。

## 外部サービスの設定

### Supabase
- Authentication → Sign In / Providers → Google を有効化
- Authentication → URL Configuration → Site URL を設定

### Google Cloud Console
- OAuth 2.0 クライアント ID を作成
- 承認済みリダイレクト URI に `https://xxxx.supabase.co/auth/v1/callback` を追加

### Stripe
- Products でサブスクリプションプランを作成
- Webhooks にエンドポイント URL を登録

## ディレクトリ構成

```
app/
├── _components/
│   ├── auth/        # ログインモーダル
│   └── home/        # ランディングページコンポーネント
├── api/stripe/      # Stripe API ルート
├── auth/callback/   # OAuth コールバック
└── pricing/         # プラン選択ページ
lib/
├── supabase/        # Supabase クライアント
└── stripe.ts        # Stripe クライアント
supabase/
└── migrations/      # DB マイグレーション SQL
docs/                # 実行計画
```
