type OperationMemoryItem = {
  type: 'operation';
  statement: string;
  x: number;
  y: number;
};

type ConditionalMemoryItem = {
  type: 'conditional';
  statement: 'do()' | "don't()";
  x: null;
  y: null;
};

type MemoryItem = OperationMemoryItem | ConditionalMemoryItem;

export function processMemory(input: string): Array<MemoryItem> {
  const regex = /mul\((\d{1,3}),(\d{1,3})\)|do\(\)|don't\(\)/g;

  const matches = [...input.matchAll(regex)];

  const result = matches.map((match) => {
    if (match[0].includes('mul')) {
      return {
        type: 'operation' as const,
        statement: match[0],
        x: Number(match[1]),
        y: Number(match[2]),
      };
    } else {
      return {
        type: 'conditional' as const,
        statement: match[0] as ConditionalMemoryItem['statement'],
        x: null,
        y: null,
      };
    }
  });

  console.log({ result });

  return result;
}

export function calculateResult(input: Array<MemoryItem>) {
  let isEnabled = true;

  return input.reduce((acc, curr) => {
    if (isEnabled && curr.type === 'operation') {
      return acc + curr.x * curr.y;
    }

    if (curr.type === 'conditional') {
      if (curr.statement === 'do()') {
        isEnabled = true;
      } else {
        isEnabled = false;
      }

      return acc;
    }

    if (!isEnabled) {
      return acc;
    }

    return acc;
  }, 0);
}
