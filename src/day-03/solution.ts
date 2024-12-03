export function extractMulStatements(input: string) {
  const regex = /mul\((\d{1,3}),(\d{1,3})\)/g;

  const matches = [...input.matchAll(regex)];

  return matches.map((match) => ({
    statement: match[0],
    x: Number(match[1]),
    y: Number(match[2]),
  }));
}

export function calculateResult(input: Array<{ x: number; y: number }>) {
  return input.reduce((acc, { x, y }) => acc + x * y, 0);
}
