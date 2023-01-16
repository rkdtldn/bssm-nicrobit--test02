input.onButtonPressed(Button.A, function () {
    basic.showNumber(score)
})
let score = 0
score = randint(0, 100)
if (score > 90) {
    basic.showNumber(1)
} else if (score > 80) {
    basic.showNumber(2)
} else if (score > 70) {
    basic.showNumber(3)
} else if (score > 60) {
    basic.showNumber(4)
} else {
    basic.showNumber(5)
}
