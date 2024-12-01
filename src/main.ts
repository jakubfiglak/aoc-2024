import { getTotalDistance } from './day-01/getTotalDistance';
import { leftList, rightList } from './day-01/input';

function main() {
  const totalDistance = getTotalDistance({ leftList, rightList });

  console.log({
    day_1_task_1: totalDistance,
  });
}

main();
