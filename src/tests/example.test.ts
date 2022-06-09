import double from './example';

describe('Example', () => {
  it('should return number * 2', () => {
    expect(double(4)).toBe(8);
  });
});
