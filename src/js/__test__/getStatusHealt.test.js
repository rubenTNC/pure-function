import getStatusHealt from '../getStatusHealt';

test('gets health status character', () => {
  const result = getStatusHealt({ name: 'маг', health: 20 });
  const expected = 'wounded';
  expect(result).toBe(expected);
});
