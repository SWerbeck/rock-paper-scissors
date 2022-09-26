const html = require('html-template-tag')




module.exports = players => html`<!DOCTYPE html>
  <html>
  <head>
    <title>Players</title>
    <link rel="stylesheet" href="/style.css" />
    
  </head>
  <body>
    <div>
      <header>List of Players</header>
${players.map(player => html`
<div class='news-item'>
  <p>
    <span><a href ="http://localhost:3000/player/${player.id}">${player.userName}</a></span>
  </p>

</div>`
)}


   
    </div>
  </body>
  </html>`;