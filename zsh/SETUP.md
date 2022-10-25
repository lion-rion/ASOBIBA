# SETUP.md

### Powerlevel10k

1. まずこのかわいいアイコンたちを表示させるためには適切なフォントが必要です．

以下のサイトからMesloLGフォントをダウンロード・インストールしましょう．自分はRegularを使っています．

<a href="https://github.com/romkatv/powerlevel10k#meslo-nerd-font-patched-for-powerlevel10k" target="_blank">https://github.com/romkatv/powerlevel10k#meslo-nerd-font-patched-for-powerlevel10k</a>

---

- [MesloLGS NF Regular.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Regular.ttf)
- [MesloLGS NF Bold.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Bold.ttf)
- [MesloLGS NF Italic.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Italic.ttf)
- [MesloLGS NF Bold Italic.ttf](https://github.com/romkatv/powerlevel10k#meslo-nerd-font-patched-for-powerlevel10k:~:text=MesloLGS%20NF%20Bold%20Italic.ttf)

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

1.ターミナルで以下を実行

今回はpulginなどを用いず通常インストールします

```bash
#ホームディレクトリに移動
cd ~/

#クローン
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git

#.zshrcに書き込み
echo "source ${(q-)PWD}/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh" >> ${ZDOTDIR:-$HOME}/.zshrc

#zsh-syntax-highlightingの有効化
source ./zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
```

### zsh-autosuggestions



### ccat



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

