let degrees = 0
basic.forever(function () {
	
})
basic.forever(function () {
    degrees = input.compassHeading()
    if (degrees < 45) {
        basic.showString("N")
    } else if (degrees < 135) {
        basic.showString("East")
    } else if (degrees < 225) {
        basic.showString("South")
    } else if (degrees < 315) {
        basic.showString("West")
    } else {
        basic.showString("N")
    }
})
