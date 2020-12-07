import { Events, EventTypes } from './Events';
export class Molgan {
    constructor() {
        this.recognition = new window.webkitSpeechRecognition();
        this.events = new Events();
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
            this.events.triggerEvent(EventTypes.ON_RECOGNITION, {
                result: e.results[0][0].transcript
            });
        };
        this.handleError = (e) => {
            console.log(e);
        };
    }
}
//# sourceMappingURL=Molgan.js.map