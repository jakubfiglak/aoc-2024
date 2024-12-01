import { getTotalDistance } from './day-01/getTotalDistance';
import { calculateSimilarityScore } from './day-01/calculateSimilarityScore';
import { leftList, rightList } from './day-01/input';

function main() {
  const totalDistance = getTotalDistance({ leftList, rightList });
  const similarityScore = calculateSimilarityScore({ leftList, rightList });

  console.log({
    day_1_task_1: totalDistance,
    day_1_task_2: similarityScore,
  });
}

main();
