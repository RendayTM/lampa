input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
	
})
control.inBackground(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            # . . . .
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
