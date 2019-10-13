import {writable} from 'svelte/store';

const store = writable(0);

export default store;

export const monitor = (promise) => {
  const {update} = store;
  update((value) => value + 1);
  return promise.finally(() => update((value) => value - 1));
};
