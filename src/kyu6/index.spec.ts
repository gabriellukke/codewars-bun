import { likes } from '.';

describe('likes', () => {
  it('empty array', () => {
    expect(likes([])).toBe('no one likes this');
  });

  it('one person', () => {
    expect(likes(['Peter'])).toBe('Peter likes this');
  });

  it('two persons', () => {
    expect(likes(['Jacob', 'Alex'])).toBe('Jacob and Alex like this');
  });

  it('three persons', () => {
    expect(likes(['Max', 'John', 'Mark'])).toBe('Max, John and Mark like this');
  });

  it('more than three persons', () => {
    expect(likes(['Alex', 'Jacob', 'Mark', 'Max'])).toBe(
      'Alex, Jacob and 2 others like this',
    );
  });
});
