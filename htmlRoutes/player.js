const html = require('html-template-tag')


module.exports = (player, games) => html`<!DOCTYPE html>
  <html>
  <head>
    <title>${player.userName}</title>
    <link rel="stylesheet" href="/style.css" />
    
  </head>
  <body>
    <div>
      <header>${player.userName}'s games:</header>


      ${games.map(game => html`
        <div class='news-item'>
          <p>
            <span>Game ${game.id}, Result: ${game.result}</span>
          </p>
        
        </div>`
      )}
    </div>
  </body>
  </html>`;