# ExecPlan: Stripe サブスクリプション実装

## 目的
Stripe Checkout を使い、月額サブスクリプション（プレミアム会員）機能を追加する。
ログイン済みユーザーがプランを購入・管理できるようにする。

## 完了条件
- ログイン済みユーザーがプラン選択画面からサブスク購入できる
- 支払い成功後に Supabase の subscriptions テーブルが更新される
- ヘッダーにプレミアムバッジが表示される
- カスタマーポータルでプラン変更・解約ができる

## 変更対象
| ファイル | 内容 |
|---|---|
| `package.json` | stripe, @stripe/stripe-js 追加 |
| `.env.local` | Stripe キー 3 種追加 |
| `lib/stripe.ts` | Stripe サーバー用クライアント |
| `supabase/migrations/001_subscriptions.sql` | subscriptions テーブル |
| `app/api/stripe/checkout/route.ts` | Checkout セッション作成 |
| `app/api/stripe/portal/route.ts` | カスタマーポータル |
| `app/api/stripe/webhook/route.ts` | Webhook ハンドラ |
| `app/pricing/page.tsx` | プラン選択画面 |
| `app/_components/home/SiteHeader.tsx` | プレミアムバッジ追加 |
| `app/page.tsx` | サブスク状態取得 |

## 手順
1. stripe / @stripe/stripe-js インストール
2. .env.local に Stripe キー追加
3. lib/stripe.ts 作成
4. Supabase migration SQL 作成
5. API ルート 3 本実装
6. pricing ページ実装
7. SiteHeader にバッジ追加

## 検証
```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
npm run dev
# → /pricing でプラン選択 → Stripe Checkout → 成功後リダイレクト → バッジ表示
```

## リスク/ロールバック
- Webhook シークレットはローカルと本番で異なる（stripe listen で取得）
- 本番移行時は Stripe ダッシュボードで Webhook エンドポイントを追加
- ロールバック: git reset --hard HEAD~N
