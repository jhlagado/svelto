import Home from './Home.svelte';
import About from './About.svelte';
import {writable} from 'svelte/store';

import pathToRegexp from 'path-to-regexp';
// console.log(Object.keys(pathToRegexp));

// const regexp = pathToRegexp('/foo/:bar');
// const list = regexp.exec('/foo/route');
// console.log(list);

const router = {
  '/': Home,
  '/home': Home,
  '/about': About,
  '/customer/:id': About,
};

export const matchRoute = (router) => {
  const routes = Object.keys(router).reduce(
      (acc, path) => {
        const keys = [];
        const regex = pathToRegexp(path, keys);
        acc.push({
          path,
          keys,
          regex,
          component: router[path],
        });
        return acc;
      },
      [],
  );
  return (curRoute) => {
    let matchedRoute = null;
    let values = null;
    for (const route of routes) {
      values = route.regex.exec(curRoute);
      if (values !== null) {
        matchedRoute = route;
        break;
      }
    }
    if (values === null) {
      return null;
    }
    const params = values.slice(1).reduce(
        (acc, value, index) => {
          const {name: key} = matchedRoute.keys[index];
          acc[key] = value;
          return acc;
        },
        {}
    );
    return {
      ...matchedRoute,
      params,
    };
  };
};

export default router;

export const curRoute = writable('/home');
