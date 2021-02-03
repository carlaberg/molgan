import { Events, EventTypes } from './Events'
import { CommandHandler } from './CommandHandler'
import { MolganError } from './MolganError';

declare global {
  interface Window {
    webkitSpeechRecognition: any;
  }
}

export class Molgan {
  
  private static instance: Molgan;
  private isRecognitionActive: boolean = false;
  recognition: any;
  synthesis: any;
  private _events: Events = new Events();
  private _commandHandler: CommandHandler = new CommandHandler();

  constructor() {
    if (typeof window !== 'undefined') {
      this.recognition = new window.webkitSpeechRecognition();
      this.synthesis = window.speechSynthesis;
    }
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new Molgan();
    }

    return this.instance;    
  }
  
  public init = (): void => {
    if (this.isRecognitionActive) {
      throw new MolganError('There is already an active recognition.');
    }

    console.log('initiated');
    this.recognition.start();
    this.isRecognitionActive = true;
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