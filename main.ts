input.onPinPressed(TouchPin.P0, function () {
    music.play(music.tonePlayable(175, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.A, function () {
    music.play(music.tonePlayable(880, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
input.onPinPressed(TouchPin.P2, function () {
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
input.onPinPressed(TouchPin.P1, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
