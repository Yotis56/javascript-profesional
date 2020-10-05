
function MediaPlayer(config) {
  this.media = config.el
  this.plugins = config.plugins || []
  this._initPlugins()
}
MediaPlayer.prototype._initPlugins = function(){
  this.plugins.forEach( plugin => {
    plugin.run(this)
  })
}
MediaPlayer.prototype.play = function () {
  this.media.play()
}
MediaPlayer.prototype.pause = function () {
  this.media.pause()
}
MediaPlayer.prototype.mute = function () {
  this.media.muted = true
}
MediaPlayer.prototype.unmute = function () {
  this.media.muted = false
}
MediaPlayer.prototype.toggleMute = function (mute, unmute) {
  unmute.classList.toggle('hidden')
  mute.classList.toggle('hidden')
  this.media.muted? this.unmute() : this.mute()
}
MediaPlayer.prototype.togglePlay = function() {
  (this.media.paused) ? this.play() : this.pause() 
}

export default MediaPlayer