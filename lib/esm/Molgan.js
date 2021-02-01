import { Events, EventTypes } from './Events';
import { CommandHandler } from './CommandHandler';
export class Molgan {
    constructor() {
        this.recognition = new window.webkitSpeechRecognition();
        this.synthesis = window.speechSynthesis;
        this._events = new Events();
        this._commandHandler = new CommandHandler();
        this.init = () => {
            console.log('initiated');
            this.recognition.start();
            this.addEventListeners();
            this.recognition.onend = this.recognition.start;
        };
        this.addEventListeners = () => {
            this.recognition.onresult = this.onResult;
            this.recognition.onerror = this.handleError;
        };
        this.onResult = (e) => {
            const resultString = e.results[0][0].transcript;
            const result = this._commandHandler.process(resultString);
            if (result.isSuccess)
                return;
            this._events.triggerEvent(EventTypes.ON_RECOGNITION, {
                result: resultString
            });
        };
        this.handleError = (e) => {
            console.log(e);
        };
        this.speak = (phrase) => {
            const utterance = new SpeechSynthesisUtterance(phrase);
            this.synthesis.speak(utterance);
        };
    }
    get on() {
        return this._events.on;
    }
    get addCommands() {
        return this._commandHandler.add;
    }
    get getCommands() {
        return this._commandHandler.commands;
    }
}
//# sourceMappingURL=Molgan.js.map