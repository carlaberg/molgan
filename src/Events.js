"use strict";
exports.__esModule = true;
exports.Events = exports.EventTypes = void 0;
var EventTypes;
(function (EventTypes) {
    EventTypes["ON_RECOGNITION"] = "ON_RECOGNITION";
})(EventTypes = exports.EventTypes || (exports.EventTypes = {}));
var Events = /** @class */ (function () {
    function Events() {
        var _this = this;
        this.events = {};
        this.on = function (eventName, callback) {
            var handlers = _this.events[eventName] || [];
            handlers.push(callback);
            _this.events[eventName] = handlers;
        };
        this.triggerEvent = function (eventName, e) {
            var handlers = _this.events[eventName];
            if (!handlers || handlers.length === 0) {
                return;
            }
            handlers.forEach(function (callback) {
                callback(e);
            });
        };
    }
    return Events;
}());
exports.Events = Events;
