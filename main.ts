input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.B, function () {
    Heading = input.compassHeading()
    basic.showString("" + (Heading))
})
let Heading = 0
basic.showString("Compass")
input.calibrateCompass()
