import { Events, EventTypes } from './Events'

export class Molgan {
  recognition: any = new (<any>window).webkitSpeechRecognition();
  result: string = '';
  resultCallbacks: any = [];
  handlerList: any;
  events: Events = new Events()
  
  public init = (): void => {
    this.handlerList = { print: this.print };

    console.log('initiated');
    this.recognition.start();
    this.addEventListeners();
    console.log(this.recognition);
    this.recognition.onend = this.recognition.start;
  }
   
  private addEventListeners = ():void => {
    this.recognition.onresult = (e: Event) => this.events.triggerEvent(EventTypes.ON_RECOGNITION, e);
    this.recognition.onerror = this.handleError;
  }
  
  // public handleResult = (e: Event):void => {
  //   this.resultCallbacks.forEach((method: string) => this.handlerList[method](e));
  // }
  
  // public addResultHandler = (handler: string):void => {
  //   this.resultCallbacks.push(handler);
  // }
  
  private print = (e: any): void => {
    const span = document.createElement('div');
    span.innerHTML = e.results[0][0].transcript;
    const bodyElement = document.querySelector('body')

    if (bodyElement) {
      bodyElement.appendChild(span);
    }
  }
  
  private handleError = (e: Event) => {
    console.log(e);
  }
}