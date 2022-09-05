input.onButtonPressed(Button.A, function () {
    basic.showNumber(Numero_1)
    Numero_1 += 1
})
input.onButtonPressed(Button.AB, function () {
    Texto = "Roberto"
    basic.showString(Texto)
})
input.onButtonPressed(Button.B, function () {
    Numero_1 += Numero2
    basic.showNumber(Numero_1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString(Texto)
})
let Texto = ""
let Numero2 = 0
let Numero_1 = 0
Numero_1 = randint(1, 5)
Numero2 = -1
Texto = "Alfredo"
