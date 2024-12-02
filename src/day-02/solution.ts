export function formatReport(raw: string) {
  return raw.split(' ').map(Number);
}

export function analyzeReport(report: Array<number>) {
  let type: 'increasing' | 'decreasing' = 'increasing';

  for (const [idx, item] of report.entries()) {
    if (idx === report.length - 1) {
      return { isSafe: true };
    }

    const nextItem = report[idx + 1];

    // Initial check for the type of report
    if (idx === 0) {
      if (item === nextItem) {
        return { isSafe: false };
      }

      item < nextItem ? (type = 'increasing') : (type = 'decreasing');
    }

    if (type === 'increasing') {
      if (nextItem >= item + 1 && nextItem <= item + 3) {
        continue;
      } else {
        return { isSafe: false };
      }
    }

    if (type === 'decreasing') {
      if (nextItem <= item - 1 && nextItem >= item - 3) {
        continue;
      } else {
        return { isSafe: false };
      }
    }
  }

  return { isSafe: true };
}

export function checkIfCanBeFixedWithProblemDampener(report: Array<number>) {
  for (const [idx] of report.entries()) {
    const reportCopy = [...report];
    reportCopy.splice(idx, 1);

    const { isSafe } = analyzeReport(reportCopy);

    if (isSafe) {
      return true;
    }
  }

  return false;
}
