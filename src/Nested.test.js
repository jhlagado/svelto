import { render, cleanup } from '@testing-library/svelte';
import Nested from './Nested.svelte';

beforeEach(cleanup); // this is required.
describe('App', () => {
  test('', () => {
    const { getByText } = render(Nested, { props: { answer: 33 } });

    expect(getByText('The answer is 33'));
  });
});
