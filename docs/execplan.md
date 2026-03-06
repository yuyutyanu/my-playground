# ExecPlan: Gmail OAuth ログイン実装 (Supabase)

## 目的
Supabase Auth を使い Gmail (Google) OAuth でのログイン機能をサイトに追加する。

## 完了条件
- ヘッダーの「LOG IN」ボタンからモーダルが開く
- 「Googleでログイン」ボタンで Google OAuth フローが起動する
- OAuth コールバック後にセッションが確立され、ヘッダーがユーザー状態を反映する
- ログアウトが機能する

## 変更対象
| ファイル | 内容 |
|---|---|
| `package.json` | @supabase/supabase-js, @supabase/ssr 追加 |
| `.env.local` | NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY |
| `lib/supabase/client.ts` | ブラウザ用 Supabase クライアント |
| `lib/supabase/server.ts` | サーバー用 Supabase クライアント |
| `middleware.ts` | セッション更新ミドルウェア |
| `app/auth/callback/route.ts` | OAuth コールバックハンドラ |
| `app/_components/auth/LoginModal.tsx` | ログインモーダル (Client Component) |
| `app/_components/home/SiteHeader.tsx` | LOG IN ボタン → モーダル呼び出し |
| `app/layout.tsx` | セッション取得・ヘッダーへ渡す |

## 手順
1. Supabase パッケージインストール
2. .env.local 雛形作成
3. lib/supabase/{client,server}.ts 作成
4. middleware.ts 作成
5. app/auth/callback/route.ts 作成
6. LoginModal コンポーネント作成
7. SiteHeader 更新（ログイン状態により表示切替）
8. layout.tsx でサーバーセッション取得

## 検証
```bash
npm run dev
# → http://localhost:3000 でヘッダーに LOG IN ボタン確認
# → クリックでモーダル表示
# → Googleでログインで OAuth フロー起動（要 Supabase 設定）
```

## リスク/ロールバック
- Supabase プロジェクト未作成の場合は .env.local の値を入力するまで OAuth は動作しない
- ロールバック: git revert または git reset --hard HEAD~N
