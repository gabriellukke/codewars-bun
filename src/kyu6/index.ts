export function likes(names: string[]): string {
  if (!names.length) return 'no one likes this';

  const [first, second, third] = names;
  const others = names.length - 2;

  if (names.length > 3) {
    return `${first}, ${second} and ${others} others like this`;
  }

  if (names.length === 3) {
    return `${first}, ${second} and ${third} like this`;
  }

  if (names.length === 2) {
    return `${first} and ${second} like this`;
  }

  return `${first} likes this`;
}
