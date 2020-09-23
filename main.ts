let age = 16
basic.forever(function () {
    if (age >= 18) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Butterfly)
    }
})
