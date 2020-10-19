interface Subject {   
  //defino como es la clase del sujeto
  subscribe: (observer: Observer) => void
  unsubscribe: (observer: Observer) => void
}

interface Observer {
  update: (data: any) => void
}

class BitcoinPrice implements Subject {
  observers: Observer[] = []
  
  constructor (){
    //traigo el botón, y cada vez que meto un valor nuevo, llamo al método notify.
    const el:HTMLInputElement = document.querySelector("#value")
    el.addEventListener('input', () =>{
      this.notify(el.value)
    })
  }
  subscribe (observer: Observer){
    this.observers.push
  }
  unsubscribe(observer: Observer){
    const index = this.observers.findIndex( obs =>{
      return obs === observer
    })
    this.observers.splice(index, 1)   //splice elimina 1 objeto desde el índice dado//
  }

  notify(data: any){
    this.observers.forEach(observer => observer.update(data))
  }
}


class PriceDisplay implements Observer{
  private el: HTMLElement
  constructor(){
    this.el = document.querySelector("#price")
  }
  update(data: any){
    this.el.innerText = data
  }
}

const value = new BitcoinPrice()
const display = new PriceDisplay()
value.subscribe(display)