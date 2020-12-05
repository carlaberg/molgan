import { Events, EventTypes } from './Events'

export class Molgan {
  
  recognition: any = new (window as any).webkitSpeechRecognition();
  events: Events = new Events()
  
  public init = (): void => {

    console.log('initiated');
    this.recognition.start();
    this.addEventListeners();
    this.recognition.onend = this.recognition.start;
  }
   
  private addEventListeners = ():void => {
    this.recognition.onresult = this.onResult
    this.recognition.onerror = this.handleError;
  }

  private onResult = (e: SpeechRecognitionEvent): void => {
    this.events.triggerEvent(EventTypes.ON_RECOGNITION, {
      result: e.results[0][0].transcript
    });
  }  
  
  private handleError = (e: Event) => {
    console.log(e);
  }
}