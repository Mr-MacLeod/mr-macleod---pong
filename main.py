

def create_ball():
    Pokeball = sprites.create(assets.image("""Pokeball"""), SpriteKind.player)
    Pokeball.set_velocity(100, 100)
    Pokeball.set_bounce_on_wall(True)
    Pokeball.y = Math.random_range(0, 120)
create_ball()

@namespace
class SpriteKind2:
    LeftPaddles = SpriteKind.create()
def create_left_paddle():
    left_paddle = sprites.create(img("""
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
    """),
        SpriteKind2.LeftPaddles)
    controller.move_sprite(left_paddle, 0, 150)
    left_paddle.set_stay_in_screen(True)
    left_paddle.left = 0
create_left_paddle()

def on_on_overlap(sprite, otherSprite):
    sprite.vx = sprite.vx * -1
    info.change_score_by(1)
sprites.on_overlap(SpriteKind.player, SpriteKind2.LeftPaddles, on_on_overlap)

@namespace
class SpriteKind2:
    RightPaddles = SpriteKind.create()
def create_right_paddle():
    right_paddle = sprites.create(img("""
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
        """),
        SpriteKind2.RightPaddles)
    controller.player2.move_sprite(right_paddle, 0, 150)
    right_paddle.set_stay_in_screen(True)
    right_paddle.right = 160
create_right_paddle()

def on_on_overlap2(sprite2, otherSprite2):
    sprite2.vx = sprite2.vx * -1
    info.player2.change_score_by(1)
sprites.on_overlap(SpriteKind.player, SpriteKind2.RightPaddles, on_on_overlap2)

def on_score():
    game.game_over(True)
    game.set_game_over_effect(True, effects.confetti)
info.player1.on_score(100, on_score)

def on_score2():
    game.game_over(True)
    game.set_game_over_effect(True, effects.confetti)
info.player2.on_score(100, on_score2)