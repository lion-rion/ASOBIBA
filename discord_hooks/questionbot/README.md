# questionbot hooks

Google Formに送信された質問をhooksを用いてDiscordに転送します．
新歓などで匿名で質問を受けるときに使い物になると思います．

<img width="742" alt="スクリーンショット 2023-01-02 15 23 55" src="https://user-images.githubusercontent.com/79553411/210200113-afae8cc3-0ccf-4a93-a382-c26c664be15e.png">

# Usage

1. Google Formでフォームを作成
2. 解答結果を表示するスプレッドシートに移動し，拡張機能タブから「Apps Script」を選択します．
3. コード.gsに貼り付けます．(初期状態では関数が入力されていますが，消してOKです)
4. const webhookURLにhookのURLを入れたりカラムの設定をします．
5. 左側のメニューからトリガーを選択し，トリガーの追加から 

```
実行する関数を選択 -> OnSubmit
イベントの種類を選択 ->フォーム送信時
```

とします．以上で設定は完了です．フォームを送信したときにDiscordにメッセージが飛んできたら成功です．


