const html = require('html-template-tag')

module.exports = (game, player) => html `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game ID</title>
</head>
<body>
<p>Game ${game.id}</p>
<p>Player: ${player.userName}</p>
<p>Result: ${game.result}</p>

    
</body>
</html>`