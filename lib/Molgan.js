(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Events"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Molgan = void 0;
    const Events_1 = require("./Events");
    class Molgan {
        constructor() {
            this.recognition = new window.webkitSpeechRecognition();
            this.events = new Events_1.Events();
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
                this.events.triggerEvent(Events_1.EventTypes.ON_RECOGNITION, {
                    result: e.results[0][0].transcript
                });
            };
            this.handleError = (e) => {
                console.log(e);
            };
        }
    }
    exports.Molgan = Molgan;
});
//# sourceMappingURL=Molgan.js.map