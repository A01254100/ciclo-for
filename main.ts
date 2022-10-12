let VELOCIDAD = 0
let X = 0
let Y = 0
basic.forever(function () {
    VELOCIDAD = 200
    for (let index = 0; index < 3; index++) {
        for (let X = 0; X <= 4; X++) {
            for (let Y = 0; Y <= 4; Y++) {
                led.plot(X, Y)
                basic.pause(VELOCIDAD)
                basic.clearScreen()
            }
        }
        basic.showIcon(IconNames.Yes)
        VELOCIDAD += -80
    }
})
