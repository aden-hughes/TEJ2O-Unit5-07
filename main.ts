/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Aden Hughes
 * Created on: May 27 
 * This program moves a car around
*/

// variables needed
let distance = 0

// setting up
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// pressing Button A
input.onButtonPressed(Button.A, function () {
    while (true) {

        // reading distance sensor
        distance = sonar.ping(
            DigitalPin.P8,
            DigitalPin.P12,
            PingUnit.Centimeters
        )
        basic.showNumber(distance)
        basic.pause(100)

        if (distance < 10) {
            robotbit.StpCarMove(0, 0)
            basic.pause(500)

            // reverse 10 cm
            robotbit.StpCarMove(-10, 48)
            basic.pause(1000)

            // turn 90 degrees
            robotbit.StpCarTurn(90, 48, 125)
            basic.pause(1000)
        } else {

            // Otherwise move forward
            robotbit.StpCarMove(10, 48)
        }
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
    }
})