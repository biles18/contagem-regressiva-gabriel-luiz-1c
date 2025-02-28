input.onButtonPressed(Button.B, function () {
    numero = 10
})
let numero = 0
numero = 10
for (let index = 0; index < 11; index++) {
    basic.showNumber(numero)
    numero = numero - 1
    music.play(music.createSoundExpression(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    basic.pause(1000)
}
basic.forever(function () {
    if (numero == 10) {
        for (let index = 0; index < 11; index++) {
            basic.showNumber(numero)
            numero = numero - 1
            music.play(music.stringPlayable("D C E D - - - - ", 120), music.PlaybackMode.UntilDone)
            basic.pause(1000)
        }
    }
})
