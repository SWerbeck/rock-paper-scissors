const html = require('html-template-tag')

// module.exports = (players) => html `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Game ID</title>
// </head>
// <body>
// ${players.map(player => `<div>
// <h2>${player.userName}</h2>
// <p>${player.id}</p>
// </div>`).join("")}
// </body>
// </html>`


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
            <span>${player.userName}</span>
          </p>
        
        </div>`
      )}
    </div>
  </body>
  </html>`;