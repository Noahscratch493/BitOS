radio.onReceivedNumber(function (receivedNumber) {
    if (MessagingApp == 1) {
        basic.showNumber(receivedNumber)
        basic.pause(1000)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    music.stopAllSounds()
    if (menu == 1) {
        scroll("l")
    } else if (MessagingApp == 1) {
        radio.sendNumber(0)
        basic.showNumber(0)
        basic.pause(1000)
        basic.clearScreen()
    } else if (music2 == 1) {
        music.play(music.stringPlayable("C - - - - - - - ", 120), music.PlaybackMode.InBackground)
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    } else {
        if (3 < cur.get(LedSpriteProperty.X)) {
            cur.set(LedSpriteProperty.X, 0)
        } else {
            cur.change(LedSpriteProperty.X, 1)
        }
    }
})
function scroll (lr: string) {
    if (lr == "r") {
        if (menuScroll == 1) {
            menuScroll = 2
            basic.showLeds(`
                . . . # .
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                `)
        } else if (menuScroll == 2) {
            menuScroll = 3
            basic.showLeds(`
                . # # # .
                # . . . #
                # . . . #
                # # # # .
                # # . . .
                `)
        } else if (menuScroll == 3) {
            menuScroll = 4
            basic.showLeds(`
                . # # # .
                # . . . #
                # . . . #
                # # . # #
                # # . # #
                `)
        } else if (menuScroll == 4) {
            menuScroll = 5
            basic.showLeds(`
                # . # . #
                # . # . #
                # . . . #
                . # # # .
                . . . . .
                `)
        } else if (menuScroll == 5) {
            menuScroll = 1
            basic.showLeds(`
                . . # . .
                . # # # .
                . # # # .
                . # # # .
                . # # # .
                `)
        }
    } else if (lr == "l") {
        if (menuScroll == 1) {
            menuScroll = 5
            basic.showLeds(`
                # . # . #
                # . # . #
                # . . . #
                . # # # .
                . . . . .
                `)
        } else if (menuScroll == 5) {
            menuScroll = 4
            basic.showLeds(`
                . # # # .
                # . . . #
                # . . . #
                # # . # #
                # # . # #
                `)
        } else if (menuScroll == 4) {
            menuScroll = 3
            basic.showLeds(`
                . # # # .
                # . . . #
                # . . . #
                # # # # .
                # # . . .
                `)
        } else if (menuScroll == 3) {
            menuScroll = 2
            basic.showLeds(`
                . . . # .
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                `)
        } else if (menuScroll == 2) {
            menuScroll = 1
            basic.showLeds(`
                . . # . .
                . # # # .
                . # # # .
                . # # # .
                . # # # .
                `)
        }
    }
}
input.onButtonPressed(Button.AB, function () {
    music.stopAllSounds()
    if (drawgame == "true") {
        drawing = game.createSprite(cur.get(LedSpriteProperty.X), cur.get(LedSpriteProperty.Y))
    } else if (menu == 1) {
        basic.clearScreen()
        if (menuScroll == 1) {
            menu = 0
            drawgame = "true"
            cur = game.createSprite(2, 2)
        } else if (menuScroll == 2) {
            menu = 0
            cur = game.createSprite(0, 2)
            apple = game.createSprite(randint(0, 4), randint(0, 4))
        } else if (menuScroll == 3) {
            menu = 0
            MessagingApp = 1
        } else if (menuScroll == 4) {
            menu = 0
            music2 = 1
        } else if (menuScroll == 5) {
            basic.clearScreen()
            menuScroll = 0
        }
    }
})
input.onButtonPressed(Button.B, function () {
    music.stopAllSounds()
    if (menu == 1) {
        scroll("r")
    } else if (MessagingApp == 1) {
        radio.sendNumber(1)
        basic.showNumber(1)
        basic.pause(1000)
        basic.clearScreen()
    } else if (music2 == 1) {
        music.play(music.stringPlayable("G - - - - - - - ", 120), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
    } else {
        if (3 < cur.get(LedSpriteProperty.Y)) {
            cur.set(LedSpriteProperty.Y, 0)
        } else {
            cur.change(LedSpriteProperty.Y, 1)
        }
    }
})
let apple: game.LedSprite = null
let drawing: game.LedSprite = null
let cur: game.LedSprite = null
let music2 = 0
let MessagingApp = 0
let menuScroll = 0
let menu = 0
let drawgame = ""
drawgame = "false"
menu = 1
menuScroll = 1
basic.showLeds(`
    . . # . .
    . # # # .
    . # # # .
    . # # # .
    . # # # .
    `)
game.setScore(0)
radio.setGroup(3058688)
basic.forever(function () {
    if (music2 == 0) {
        if (MessagingApp == 0) {
            if (menu == 0) {
                if (drawgame == "false") {
                    if (cur.isTouching(apple)) {
                        game.addScore(1)
                        apple.delete()
                        cur.delete()
                        cur = game.createSprite(0, 2)
                        apple = game.createSprite(randint(0, 4), randint(0, 4))
                    }
                }
            }
        }
    }
})
