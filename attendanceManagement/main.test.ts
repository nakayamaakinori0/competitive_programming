
import { main } from './main';

describe('test of main', () => {
  test('test1', () => {
    const input = ['helloWorld'];
    const result = main(input);
    expect(result).toBe('helloWorld');
  });

  test('test2', () => {
    const input = ['helloWorld'];
    const result = main(input);
    expect(result).toBe('helloWorld');
  });
});
