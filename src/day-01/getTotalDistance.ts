interface GetTotalDistanceArgs {
  leftList: Array<number>;
  rightList: Array<number>;
}

export function getTotalDistance({
  leftList,
  rightList,
}: GetTotalDistanceArgs) {
  const leftSorted = leftList.sort((a, b) => a - b);
  const rightSorted = rightList.sort((a, b) => a - b);

  return leftSorted.reduce((acc, curr, idx) => {
    return acc + Math.abs(curr - rightSorted[idx]);
  }, 0);
}
