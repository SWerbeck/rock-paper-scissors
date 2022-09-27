const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/roshambo');

const createPlayer = async (name) => {
    const Player = db.define(name,{
        userName: {
           type: Sequelize.STRING,
           allowNull: false
        }
    
    })

}



const Player = db.define('user',{
    userName: {
       type: Sequelize.STRING,
       allowNull: false
    }

})

const Game = db.define('game',{
    result: {
       type: Sequelize.ENUM([
        "computer wins",
        "human wins",
        "tie"
       ]),
      
    }

})

Player.hasMany(Game)
Game.belongsTo(Player)

module.exports = {
    db,
    Player,
    Game,
    createPlayer
}