import MediaPlayer from '../MediaPlayer'

class AutoPause {
  private threshold: number
  player: MediaPlayer

  constructor(){
    this.threshold = 0.25
    this.handleIntersection = this.handleIntersection.bind(this)
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
  }

  run(player) {
    this.player = player      //guardo el player en la instancia//
    const observer = new IntersectionObserver(this.handleIntersection, { threshold: this.threshold})
    observer.observe(player.media)    // se le pasa el objeto que se está observando
    document.addEventListener("visibilitychange", this.handleVisibilityChange)

  }

  private handleIntersection(entries: IntersectionObserverEntry[]){    //recibe como argumentos los elementos que se están observando//
    const entry = entries[0]
    if (entry.intersectionRatio >= this.threshold) {
      this.player.play()
    } else {
      this.player.pause()
    }
  }

  private handleVisibilityChange(){
    const isVisible = document.visibilityState === 'visible'
    if (isVisible){
      this.player.play()
    } else {
      this.player.pause()
    }
  }
}

export default AutoPause