import {writable} from 'svelte/store';

import pathToRegexp from 'path-to-regexp';

export const router = (routes) => {
  let defaultRoute = null;
  const routeList = routes.map(
      (route) => {
        const keys = [];
        const regex = pathToRegexp(route.path, keys);
        if (route.default) {
          defaultRoute = route;
        }
        return {
          component: route.component,
          keys,
          regex,
        };
      },
  );
  return (curRoute) => {
    let values = null;

    for (const routeItem of routeList) {
      const {regex, keys, component} = routeItem;
      values = regex.exec(curRoute);
      if (values !== null) {
        return {
          component,
          params: values.slice(1).reduce(
              (acc, value, index) => {
                const {name: key} = keys[index];
                acc[key] = value;
                return acc;
              },
              {}
          ),
        };
      }
    }
    return {
      ...defaultRoute,
      params: {},
    };
  };
};

export const curRoute = writable('');
