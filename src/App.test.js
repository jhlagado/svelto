import {render, cleanup} from '@testing-library/svelte';
import App from './App.svelte';

beforeEach(cleanup); // this is required.

describe('App', () => {
  test('', () => {
    const {container} = render(App, {
      props: {
        name: 'John',
      },
    });
    const el = container.querySelector('div div');
    expect(el.innerHTML.trim()).toBe('Hello John! <p>The answer is 42</p>');
  });
});
