import { throws } from "assert";

export class AudioProcessor {
  recognition: any = new (<any>window).webkitSpeechRecognition();
  result: string = '';
  resultCallbacks: any = [];
  handlerList: any;
  
  public init = () => {
    this.handlerList = { print: this.print };

    console.log('initiated');
    this.recognition.start();
    this.addEventListeners();
    console.log(this.recognition);
    this.recognition.onend = this.recognition.start;
  }
  
  private addEventListeners = () => {
    this.recognition.onresult = this.handleResult;
    this.recognition.onerror = this.handleError;
  }
  
  public handleResult = (e) => {
    console.log(this)
    this.resultCallbacks.forEach(method => this.handlerList[method](e));
  }
  
  public addResultHandler = (handler) => {
    this.resultCallbacks.push(handler);
  }
  
  private print = (e) => {
    const span = document.createElement('div');
    span.innerHTML = e.results[0][0].transcript;
    document.querySelector('body').appendChild(span);
  }
  
  private handleError = (e) => {
    // console.log(e);
  }
}