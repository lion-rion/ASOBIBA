# SETUP.md

### Powerlevel10k

1. まずこのかわいいアイコンたちを表示させるためには適切なフォントが必要です．

以下のサイトからMesloLGフォントをダウンロード・インストールしましょう．自分はRegularを使っています．

<a href="https://github.com/romkatv/powerlevel10k#meslo-nerd-font-patched-for-powerlevel10k" target="_blank">https://github.com/romkatv/powerlevel10k#meslo-nerd-font-patched-for-powerlevel10k</a>

---
引用リンクです

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

以下をターミナルで実行

```bash
#.zshフォルダにクローン 
git clone https://github.com/zsh-users/zsh-autosuggestions ~/.zsh/zsh-autosuggestions

//.zshrcへの書き込み
echo "source ~/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh" >> ${ZDOTDIR:-$HOME}/.zshrc

#設定を更新
source ~/.zshrc
```

### ccat

以下をターミナルで実行

```bash
#brewでインストール
brew install ccat
```

2.エイリアスの設定

.zshrcに以下を書き込み
```bash
#ccat alias
#色付きcatコマンド
alias cat='ccat'
```

エイリアスを使わない場合は`ccats`で使えます

### exa

1.以下をターミナルで実行

```bash
#brewでインストール
brew install exa
```

2.エイリアスの設定

.zshrcに以下を書き込み
```bash
#exa alias
#ディレクトリをツリー表示
alias tree='exa -T'
#色付きlsコマンド
alias ls='exa --icons'
```

エイリアスを使わない場合は`exa --icons`などで使えます


---

### grc

1.以下をターミナルで実行

```bash
#brewでインストール
brew install grc
```

2.エイリアスの設定

.zshrcに以下を書き込み
```bash
#grc alias
alias ping='grc ping'
alias ifconfig='grc ifconfig'
alias make='grc make'
```

エイリアスを使わない場合は`grc ping`などで使えます

## Authors
[@Lion](https://github.com/lion-rion)

