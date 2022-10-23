function onSubmit(e) {
    // DiscordのウェブフックURL.
    const webhookURL = '［hookのリンク］'; 

    // Discordに表示する文章.
    let messageBody = '';

    messageBody += `@here\n`;
    messageBody += `みんな! 質問が飛んできたよ!\n`;
    messageBody += `\n`;

    // フォームの内容に応じて変える.
    messageBody += `≪名前≫\n`;
    messageBody += `${e.namedValues['名前(匿名の場合は匿名と記載)'][0]}\n\n`;
    messageBody += `≪分野≫\n`;
    messageBody += `${e.namedValues['分野'][0]}\n\n`;
    messageBody += `≪質問≫\n`;
    messageBody += `${e.namedValues['質問'][0]}\n`;
    messageBody += `\n`;
    const payload = {

      username: '質問くん',

      content: messageBody,

    }


    const param = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      payload: JSON.stringify(payload)
    }

    UrlFetchApp.fetch(webhookURL, param);
    
}
