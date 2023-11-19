export function likes(names: string[]): string {
  const [first, second, third] = names;
  const others = names.length - 2;

  const obj: { [key: number]: string } = {
    0: 'no one likes this',
    1: `${first} likes this`,
    2: `${first} and ${second} like this`,
    3: `${first}, ${second} and ${third} like this`,
    4: `${first}, ${second} and ${others} others like this`,
  };

  return obj[names.length] || obj[4];
}
