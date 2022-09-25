const {
    db,
    Player,
    Game

} = require('./db')

const seedDB = async () => {
    await db.sync({force: true, logging: false})
  
    const jeff = await Player.create({
        userName: "Jeff"
    })

    const frank = await Player.create({
        userName: "Frank"
    })

    const jill = await Player.create({
        userName: "Jill"
    })

    await Game.create({
        result: "tie",
        userId: jeff.id
    })

    await Game.create({
        result: "computer wins",
        userId: jill.id
    })

    await Game.create({
        result: "human wins",
        userId: frank.id
    })

    await Game.create({
        result: "human wins",
        userId: jill.id
    })

    await Game.create({
        result: "tie",
        userId: frank.id
    })

    await Game.create({
        result: "tie",
        userId: jeff.id
    })
    await Game.create({
        result: "tie",
        userId: jill.id
    })
    await Game.create({
        result: "computer wins",
        userId: frank.id
    })
 
 
}

seedDB()

