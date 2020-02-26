import Ee from 'event-emitter';

export const emitter = new Ee();

export const notifyMain = (msg, options) => {
  emitter.emit('mainNotification', msg, options);
};

export const notifySub = (msg, options) => {
  emitter.emit('subNotification', msg, options);
};
