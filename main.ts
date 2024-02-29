function create_ball() {
    let Pokeball = sprites.create(assets.image`Pokeball`, SpriteKind.Player)
    Pokeball.setVelocity(100, 100)
    Pokeball.setBounceOnWall(true)
    Pokeball.y = Math.randomRange(0, 120)
}

create_ball()
namespace SpriteKind2 {
    export const LeftPaddles = SpriteKind.create()
}

function create_left_paddle() {
    let left_paddle = sprites.create(img`
        . . . . . 2 3 1 1 3 2 . . . . .
        . . . . . 2 3 1 1 3 2 . . . . .
        . . . . . 2 3 1 1 3 2 . . . . .
        . . . . . 2 3 1 1 3 2 . . . . .
        . . . . . 2 3 1 1 3 2 . . . . .
        . . . . . 2 3 1 1 3 2 . . . . .
        . . . . . 2 3 1 1 3 2 . . . . .
        . . . . . 2 3 1 1 3 2 . . . . .
        . . . . . 2 3 1 1 3 2 . . . . .
        . . . . . 2 3 1 1 3 2 . . . . .
        . . . . . 2 3 1 1 3 2 . . . . .
        . . . . . 2 3 1 1 3 2 . . . . .
        . . . . . 2 3 1 1 3 2 . . . . .
        . . . . . 2 3 1 1 3 2 . . . . .
        . . . . . 2 3 1 1 3 2 . . . . .
        . . . . . 2 3 1 1 3 2 . . . . .
    `, SpriteKind2.LeftPaddles)
    controller.moveSprite(left_paddle, 0, 150)
    left_paddle.setStayInScreen(true)
    left_paddle.left = 0
}

create_left_paddle()
sprites.onOverlap(SpriteKind.Player, SpriteKind2.LeftPaddles, function on_on_overlap(sprite: Sprite, otherSprite: Sprite) {
    sprite.vx = sprite.vx * -1
    info.changeScoreBy(1)
})
namespace SpriteKind2 {
    export const RightPaddles = SpriteKind.create()
}

function create_right_paddle() {
    let right_paddle = sprites.create(img`
            . . . . . 8 9 1 1 9 8 . . . . .
                    . . . . . 8 9 1 1 9 8 . . . . .
                    . . . . . 8 9 1 1 9 8 . . . . .
                    . . . . . 8 9 1 1 9 8 . . . . .
                    . . . . . 8 9 1 1 9 8 . . . . .
                    . . . . . 8 9 1 1 9 8 . . . . .
                    . . . . . 8 9 1 1 9 8 . . . . .
                    . . . . . 8 9 1 1 9 8 . . . . .
                    . . . . . 8 9 1 1 9 8 . . . . .
                    . . . . . 8 9 1 1 9 8 . . . . .
                    . . . . . 8 9 1 1 9 8 . . . . .
                    . . . . . 8 9 1 1 9 8 . . . . .
                    . . . . . 8 9 1 1 9 8 . . . . .
                    . . . . . 8 9 1 1 9 8 . . . . .
                    . . . . . 8 9 1 1 9 8 . . . . .
                    . . . . . 8 9 1 1 9 8 . . . . .
        `, SpriteKind2.RightPaddles)
    controller.player2.moveSprite(right_paddle, 0, 150)
    right_paddle.setStayInScreen(true)
    right_paddle.right = 160
}

create_right_paddle()
sprites.onOverlap(SpriteKind.Player, SpriteKind2.RightPaddles, function on_on_overlap2(sprite2: Sprite, otherSprite2: Sprite) {
    sprite2.vx = sprite2.vx * -1
    info.player2.changeScoreBy(1)
})
info.player1.onScore(100, function on_score() {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
info.player2.onScore(100, function on_score2() {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
