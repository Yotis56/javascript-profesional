import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector('video')
const playButton = document.querySelector('#playButton')
const muteButton = document.querySelector('#muteButton')
const muteIcon = document.querySelector('#mute_icon')
const unmuteIcon = document.querySelector('#unmute_icon')


const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()]})
playButton.onclick = () => player.togglePlay()
muteButton.onclick = () => player.toggleMute(muteIcon, unmuteIcon)