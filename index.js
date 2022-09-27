const express = require('express')
const app = express()
let router = require('express').Router()
const game = require('./htmlRoutes/game.js')
const playerHtml = require('./htmlRoutes/player.js')
const allPlayers = require('./htmlRoutes/allPlayers.js')
const {db, Player, Game,} = require('./db')

app.use(express.urlencoded({extended: false}))





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
       
        

        res.send(playerHtml(player, games))


    }
    catch(err){
        next(err)
    }


})

app.put('/player/:playerId', async(req, res, next) => {
    try{
         
     const player = await Player.findByPk(+req.params.playerId)

     
         
     const newPlayer = await player.update(req.body)
      
        
        res.send(newPlayer)


    }
    catch(err){
        next(err)
    }


})






const PORT = 3000
app.listen(PORT, ()=>{
    console.log("you are using port: ", PORT)
})