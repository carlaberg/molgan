import { Events, EventTypes } from './Events'
import { CommandHandler } from './CommandHandler'

export class Molgan {
  
  recognition: any = new (window as any).webkitSpeechRecognition();
  synthesis: any = window.speechSynthesis;
  private _events: Events = new Events();
  private _commandHandler: CommandHandler = new CommandHandler();
  
  public init = (): void => {

    console.log('initiated');
    this.recognition.start();
    this.addEventListeners();
    this.recognition.onend = this.recognition.start;
  }
   
  private addEventListeners = (): void => {
    this.recognition.onresult = this.onResult
    this.recognition.onerror = this.handleError;
  }

  private onResult = (e: SpeechRecognitionEvent): void => {
    const resultString = e.results[0][0].transcript;

    const result = this._commandHandler.process(resultString);

    if (result.isSuccess) return

    this._events.triggerEvent(EventTypes.ON_RECOGNITION, {
      result: resultString
    });
  }  
  
  private handleError = (e: SpeechRecognitionEvent) => {
    console.log(e);
  }

  public speak = (phrase: string): void => {
    const utterance = new SpeechSynthesisUtterance(phrase);
    this.synthesis.speak(utterance)
  }

  public get on() {
    return this._events.on
  }

  public get addCommands() {
    return this._commandHandler.add
  }

  public get getCommands() {
    return this._commandHandler.commands
  }
}