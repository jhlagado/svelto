import App from './App.svelte';
import './base.css';

const run = async () => {
  const config = await import('../config/config.json');
  const app = new App({
    target: document.body,
    props: {
      config,
    },
  });

  return app;
}

export default run();
