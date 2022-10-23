# SETUP.md

### Powerlevel10k

1. まずこのかわいいアイコンたちを表示させるためには適切なフォントが必要です．

以下のサイトからMesloLGフォントをダウンロード・インストールしましょう．自分はRegularを使っています．

https://github.com/romkatv/powerlevel10k#meslo-nerd-font-patched-for-powerlevel10k

---

<img width="444" alt="スクリーンショット 2022-10-24 4 04 19" src="https://user-images.githubusercontent.com/79553411/197410748-6b9c7d05-e97c-4797-992b-9a08425b64e6.png">

---

2.次はターミナルのフォント設定を変更しましょう．

ターミナルのメニューから環境設定を選択します。

<img src="https://osmaniax.1banzaka.com/wp-content/uploads/2021/08/terminal_menu.png">

プロファイルのタブからフォントを選択

<img src="https://osmaniax.1banzaka.com/wp-content/uploads/2021/08/terminalsetting.png">

先ほどダウンロードしたフォントに変更しましょう

<img src="https://osmaniax.1banzaka.com/wp-content/uploads/2021/08/changefonts.png">

3.フォントの設定は完了なのでターミナルでコマンドを以下の通りに入力してください．

```bash
#ホームディレクトリに移動
cd ~/

#.zshフォルダを作成
mkdir -p .zsh

#.zshに移動
cd .zsh

#p10kをクローン
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git

#ホームディレクトリに移動
cd ~/

#.zshrcに書き込み
echo 'source ~/.zsh/powerlevel10k/powerlevel10k.zsh-theme' >> ~/.zshrc  

#.zshrc再読み込み
source .zshrc
```

4.質問が現れるので答えてください．絵が写っているか，どんな見た目にしたいかなどを問われます

<img src="https://osmaniax.1banzaka.com/wp-content/uploads/2021/08/p10kmenu.png">

#### 再設定したいという場合

ターミナルで以下を入力することでやりなおせます．

```bash
p10k configure
```

---

### zsh-syntax-highlighting

存在しているコマンドであれば緑色に光ります．間違っていると赤色に光るのでわかりやすいですね！

---

<img width="174" alt="スクリーンショット 2022-10-24 3 35 47" src="https://user-images.githubusercontent.com/79553411/197409632-eb8f611f-10a8-4fe7-b862-369c402b0566.png">

---

### zsh-autosuggestions

過去の入力からサジェスト表示してくれます．コマンドを↑で遡るもの面倒だけど打つのも面倒...ってときに超有能です

---

<img width="885" alt="スクリーンショット 2022-10-24 3 54 16" src="https://user-images.githubusercontent.com/79553411/197410368-8411c1cc-3310-4898-a290-6a9d5dc98ccf.png">

---

### ccat

catコマンドの結果に色を付けてくれます

---

<img width="567" alt="スクリーンショット 2022-10-24 3 44 44" src="https://user-images.githubusercontent.com/79553411/197409962-4f373bd2-8993-4be2-b180-239c2edb4b59.png">

---

### exa

lsの結果にアイコンを付けてくれて，色付けもしてくれるのでディレクトリかファイルかの見分けが楽になります． Goはしっかりgopherくんになるところもポイント高いですね :)

---

<img width="208" alt="スクリーンショット 2022-10-24 3 49 17" src="https://user-images.githubusercontent.com/79553411/197410154-1ed5cd4c-646d-472b-8490-4cf43aa16551.png">

---

### grc

いろんなものを色付けしてくれるものです．自分はifconfig，ping，makeあたりを色付けしています

---

<img width="717" alt="スクリーンショット 2022-10-24 3 52 15" src="https://user-images.githubusercontent.com/79553411/197410280-556941b6-f082-49aa-893e-8853c9413610.png">

---

## Authors
[@Lion](https://github.com/lion-rion)

