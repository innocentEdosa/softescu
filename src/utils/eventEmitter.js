import Ee from 'event-emitter';

export const emitter = new Ee();

export const notify = (emitterReference, msg, options) => {
  emitter.emit(emitterReference, msg, options);
};

