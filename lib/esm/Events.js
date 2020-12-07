export var EventTypes;
(function (EventTypes) {
    EventTypes["ON_RECOGNITION"] = "ON_RECOGNITION";
})(EventTypes || (EventTypes = {}));
export class Events {
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
//# sourceMappingURL=Events.js.map