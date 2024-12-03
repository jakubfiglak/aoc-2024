import { getTotalDistance } from './day-01/getTotalDistance';
import { calculateSimilarityScore } from './day-01/calculateSimilarityScore';
import { leftList, rightList } from './day-01/input';
import { reports } from './day-02/input';
import {
  formatReport,
  analyzeReport,
  checkIfCanBeFixedWithProblemDampener,
} from './day-02/solution';
import { memory } from './day-03/input';
import { calculateResult, processMemory } from './day-03/solution';

function main() {
  // Day 1
  const totalDistance = getTotalDistance({ leftList, rightList });
  const similarityScore = calculateSimilarityScore({ leftList, rightList });

  // Day 2
  const formattedReports = reports.map(formatReport);
  const analyzedReports = formattedReports.map((report) => ({
    content: report,
    isSafe: analyzeReport(report).isSafe,
  }));
  const safeReportsCount = analyzedReports.filter(
    (report) => report.isSafe,
  ).length;

  const unsafeReports = analyzedReports.filter((report) => !report.isSafe);

  const unsafeReportsThatCanBeFixed = unsafeReports
    .map((report) => checkIfCanBeFixedWithProblemDampener(report.content))
    .filter(Boolean);

  // Day 3
  const statements = processMemory(memory);
  const result = calculateResult(statements);

  console.log({
    day1: {
      task1: totalDistance,
      task2: similarityScore,
    },
    day2: {
      task1: safeReportsCount,
      task2: safeReportsCount + unsafeReportsThatCanBeFixed.length,
    },
    day3: {
      task2: result,
    },
  });
}

main();
