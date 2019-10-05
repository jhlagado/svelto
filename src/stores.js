import {writable} from 'svelte/store';
import {getServiceUrl} from './tools';

const StoreStatus = {
  INIT: 'INIT',
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
};

/**
 * @function
 * @name createStore
 * @param {any} config
 * @return {
 *  {
 *    subscribe: {function},
 *    loadCustomers: {function}
 *  }
 * }
 */
export const createStore = (config) => {
  const serviceUrl = getServiceUrl(config);

  const initState = {
    status: StoreStatus.INIT,
    error: null,
    data: [],
  };

  const {subscribe, set, update} = writable(initState);

  const fetchCustomers = async () => {
    try {
      const res = await fetch(serviceUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `{
            customers {
              _id
              first_name
              last_name
              email
              gender
              ip_address
            }
          }`,
        }),
      });
      const object = await res.json();
      console.log('3');
      update((state) => {
        return ({
          ...state,
          status: StoreStatus.SUCCESS,
          data: object.data.customers,
        });
      });
    } catch (err) {
      update((state) => ({
        ...state,
        status: StoreStatus.FAILURE,
      }));
    }
  };

  return {

    subscribe,

    reset() {
      set(initState);
    },

    loadCustomers() {
      update((state) => {
        if (state.status === StoreStatus.PENDING) {
          return state;
        }

        fetchCustomers();

        return {
          ...state,
          status: StoreStatus.PENDING,
        };
      });
    },
  };
};
