"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Molgan = void 0;
const Events_1 = require("./Events");
const CommandHandler_1 = require("./CommandHandler");
class Molgan {
    constructor() {
        this.recognition = new window.webkitSpeechRecognition();
        this.synthesis = window.speechSynthesis;
        this._events = new Events_1.Events();
        this._commandHandler = new CommandHandler_1.CommandHandler();
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
            this._events.triggerEvent(Events_1.EventTypes.ON_RECOGNITION, {
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
exports.Molgan = Molgan;
//# sourceMappingURL=Molgan.js.map