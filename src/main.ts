import { getTotalDistance } from './day-01/getTotalDistance';
import { calculateSimilarityScore } from './day-01/calculateSimilarityScore';
import { leftList, rightList } from './day-01/input';
import { reports } from './day-02/input';
import { formatReport, analyzeReport } from './day-02/solution';

function main() {
  // Day 1
  const totalDistance = getTotalDistance({ leftList, rightList });
  const similarityScore = calculateSimilarityScore({ leftList, rightList });

  // Day 2
  const formattedReports = reports.map(formatReport);
  const analyzedReports = formattedReports.map(analyzeReport);
  const safeReportsCount = analyzedReports.filter(
    (report) => report.isSafe,
  ).length;

  console.log({
    day1: {
      task1: totalDistance,
      task2: similarityScore,
    },
    day2: {
      task1: safeReportsCount,
    },
  });
}

main();
