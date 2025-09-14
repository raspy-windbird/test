//% weight=100 color=#0080ff icon="\uf1b2"
namespace PC98 {

//% block="ブート音を再生"
export function Boot() {
    music.play(music.createSoundExpression(
        WaveShape.Square,72,98,3,4,5000,
        SoundExpressionEffect.None,InterpolationCurve.Linear
    ), music.PlaybackMode.UntilDone)
    music.play(music.createSoundExpression(
        WaveShape.Square,98,98,5,5,2000,
        SoundExpressionEffect.None,InterpolationCurve.Linear
    ), music.PlaybackMode.UntilDone)
    music.play(music.createSoundExpression(
        WaveShape.Square, 2000,2000,25,25,150,
        SoundExpressionEffect.None,InterpolationCurve.Logarithmic
    ), music.PlaybackMode.UntilDone)
    music.play(music.createSoundExpression(
        WaveShape.Square,1000,1000,25,25,200,
        SoundExpressionEffect.None,InterpolationCurve.Linear
    ), music.PlaybackMode.UntilDone)
}

}