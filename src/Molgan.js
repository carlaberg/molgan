"use strict";
exports.__esModule = true;
exports.Molgan = void 0;
var Events_1 = require("./Events");
var Molgan = /** @class */ (function () {
    function Molgan() {
        var _this = this;
        this.recognition = new window.webkitSpeechRecognition();
        this.events = new Events_1.Events();
        this.init = function () {
            console.log('initiated');
            _this.recognition.start();
            _this.addEventListeners();
            _this.recognition.onend = _this.recognition.start;
        };
        this.addEventListeners = function () {
            _this.recognition.onresult = _this.onResult;
            _this.recognition.onerror = _this.handleError;
        };
        this.onResult = function (e) {
            _this.events.triggerEvent(Events_1.EventTypes.ON_RECOGNITION, {
                result: e.results[0][0].transcript
            });
        };
        this.handleError = function (e) {
            console.log(e);
        };
    }
    return Molgan;
}());
exports.Molgan = Molgan;
