export enum EventTypes {
  ON_RECOGNITION = 'ON_RECOGNITION'
}

type EventCallback = (e?: Event) => void;

export class Events {
  events: { [key: string]: EventCallback[] } = {};

  on = (eventName: string, callback: EventCallback): void => {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  };

  triggerEvent = (eventName: string, e?: Event): void => {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach(callback => {
      callback(e);
    });
  };
}