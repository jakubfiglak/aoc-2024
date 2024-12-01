interface CalculateSimilarityScoreArgs {
  leftList: Array<number>;
  rightList: Array<number>;
}

export function calculateSimilarityScore({
  leftList,
  rightList,
}: CalculateSimilarityScoreArgs) {
  const similarityScores = leftList.map((value) => {
    const similarItemsInRightArray = rightList.filter(
      (rightValue) => rightValue === value,
    );

    return value * similarItemsInRightArray.length;
  });

  return similarityScores.reduce((acc, curr) => acc + curr, 0);
}
