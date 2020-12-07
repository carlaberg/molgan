(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Events = exports.EventTypes = void 0;
    var EventTypes;
    (function (EventTypes) {
        EventTypes["ON_RECOGNITION"] = "ON_RECOGNITION";
    })(EventTypes = exports.EventTypes || (exports.EventTypes = {}));
    class Events {
        constructor() {
            this.events = {};
            this.on = (eventName, callback) => {
                const handlers = this.events[eventName] || [];
                handlers.push(callback);
                this.events[eventName] = handlers;
            };
            this.triggerEvent = (eventName, e) => {
                const handlers = this.events[eventName];
                if (!handlers || handlers.length === 0) {
                    return;
                }
                handlers.forEach(callback => {
                    callback(e);
                });
            };
        }
    }
    exports.Events = Events;
});
//# sourceMappingURL=Events.js.map