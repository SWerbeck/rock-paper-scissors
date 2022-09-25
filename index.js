const express = require('express')
const app = express()
const game = require('./htmlRoutes/game.js')
const player = require('./htmlRoutes/player.js')
const allPlayers = require('./htmlRoutes/allPlayers.js')
const {db, Player, Game} = require('./db')

app.get('/game/:gameId', async(req, res, next) => {
    try{
         
        const gameId = +req.params.gameId
        const games = await Game.findByPk(gameId)
        const playerId = games.userId
        const player = await Player.findByPk(playerId)
        res.send(game(games, player))


    }
    catch(err){
        next(err)
    }
})

    app.get('/player', async(req, res, next) => {
        try{
             
            const players = await Player.findAll()

            res.send(allPlayers(players))
    
    
        }
        catch(err){
            next(err)
        }

   
})

app.get('/player/:playerId', async(req, res, next) => {
    try{
         
        const playersId = +req.params.playerId
        const player = await Player.findByPk(playersId)
        const games = await Game.findAll({
            where: {userId: playersId}
        })
       
        

        res.send(``)


    }
    catch(err){
        next(err)
    }


})






const PORT = 3000
app.listen(PORT, ()=>{
    console.log("you are using port: ", PORT)
})