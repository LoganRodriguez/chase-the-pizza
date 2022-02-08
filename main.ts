sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    music.baDing.play()
    P_I_Z_Z_A.setPosition(randint(0, 160), randint(0, 120))
    info.startCountdown(5)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false, effects.dissolve)
})
let P_I_Z_Z_A: Sprite = null
scene.setBackgroundColor(1)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . f f f f f f f f f f f f . . 
    . . f f f f f f f f f f f f . . 
    . . f f f f f f f f f f f f . . 
    . . f f f f f f f f f f f f . . 
    . . f f 1 f f f f f f 1 f f . . 
    . . f f 1 f f f f f f 1 f f . . 
    . . f f f f f f f f f f f f . . 
    . . f f f f f f f f f f f f . . 
    . . f f f f f f f f f f f f . . 
    . . f f f f f f f f f f f f . . 
    . . f f f f f f f f f f f f . . 
    . . f f f f f f f f f f f f . . 
    . . . f f f . . . . f f f . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
P_I_Z_Z_A = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 4 4 . . . . . . . . 
    . . . . . 4 4 4 . . . . . . . . 
    . . . . 4 4 4 2 . . . . . . . . 
    . . . 4 4 4 5 5 5 5 . . . . . . 
    . . 4 4 4 5 5 5 5 5 5 . . . . . 
    . 4 4 4 5 5 5 2 5 5 2 5 . . . . 
    . 4 4 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . 5 5 2 5 5 5 5 5 5 5 . . . 
    . . . . 5 5 5 5 5 5 2 5 5 2 . . 
    . . . . 5 5 5 5 2 5 5 5 5 5 . . 
    . . . . 5 . 5 5 5 5 5 5 5 5 . . 
    . . . . 5 . 5 . 5 5 5 5 5 . . . 
    . . . . . . . . . . . . 5 . . . 
    . . . . . . . . . . . . 5 . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
let mySprite3 = sprites.create(assets.image`Jared`, SpriteKind.Enemy)
P_I_Z_Z_A.setPosition(randint(0, 160), randint(0, 120))
mySprite3.setPosition(randint(0, 10), randint(0, 10))
mySprite3.follow(mySprite, 75)
music.playMelody("G G A G F G F A ", 237)
let enemy_count = info.score() / 5
