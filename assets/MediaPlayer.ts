
class MediaPlayer {
  
  media: HTMLMediaElement
  plugins: [any]

  constructor(config: any) {
    this.media = config.el
    this.plugins = config.plugins || []
    this.initPlugins()
  }
  private initPlugins() {
    
    this.plugins.forEach(plugin => {
      plugin.run(this)
    })
  }
  play() {
    this.media.play()
  }
  pause() {
    this.media.pause()
  }
  mute() {
    this.media.muted = true
  }
  unmute() {
    this.media.muted = false
  }
  toggleMute(mute, unmute) {
    unmute.classList.toggle('hidden')
    mute.classList.toggle('hidden')
    this.media.muted ? this.unmute() : this.mute()
  }
  togglePlay() {
    (this.media.paused) ? this.play() : this.pause()
  }
}


export default MediaPlayer