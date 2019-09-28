import App from './App.svelte';
import './base.css';

const run = async () => {

  const res = await fetch('./config/config.js', {
      headers: {
        'Content-Type': 'application/json'
      },
  });
  console.log(res.json());
  const app = new App({
    target: document.body,
    props: {
      name: 'world',
    },
  });

  return app;
}

export default run();
