import Home from './Home.svelte';
import About from './About.svelte';
import { writable } from 'svelte/store';

const router = {
  '/': Home,
  '/home': Home,
  '/about': About,
  '/customer/:id': About
}

export default router;

export const curRoute = writable('/home');
