import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'


const video = document.querySelector('video')
const playButton: HTMLElement = document.querySelector('#playButton')
const muteButton: HTMLElement = document.querySelector('#muteButton')
const muteIcon = document.querySelector('#mute_icon')
const unmuteIcon = document.querySelector('#unmute_icon')


const player = new MediaPlayer({ el: video, plugins: [new AutoPlay(), new AutoPause()]})
playButton.onclick = () => player.togglePlay()
muteButton.onclick = () => player.toggleMute(muteIcon, unmuteIcon)

//parte de los service workers

if ('serviceWorker' in navigator){
  navigator.serviceWorker.register('./sw.js').catch(error => {
    console.log(error.message)
  })
}