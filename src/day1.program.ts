import { puzzleInput } from "./day1.input";
// const testInput = `
// 3   4
// 4   3
// 2   5
// 1   3
// 3   9
// 3   3
// `;

const createCrudeLists = (): { listLeft: number[]; listRight: number[] } => {
  let listLeft = [];
  let listRight = [];
  const lines = puzzleInput.split(/\r?\n|\r|\n/g).filter((line) => !!line);
  for (let i = 0; i < lines.length; i++) {
    const lr = lines[i].split("   ");
    listLeft.push(parseInt(lr[0]));
    listRight.push(parseInt(lr[1]));
  }
  return {
    listLeft,
    listRight,
  };
};

const calculateTotalDistance = (): number => {
  const { listLeft, listRight } = createCrudeLists();
  listLeft.sort();
  listRight.sort();

  let sumDistance = 0;
  for (let i = 0; i < listLeft.length; i++) {
    const distance = Math.abs(listLeft[i] - listRight[i]);
    sumDistance += distance;
  }
  return sumDistance;
};

const similarityScore = (): number => {
  const { listLeft, listRight } = createCrudeLists();
  let similarityScore = 0;
  for (let i = 0; i < listLeft.length; i++) {
    similarityScore +=
      listLeft[i] * listRight.filter((e) => e == listLeft[i]).length;
  }
  return similarityScore;
};

export const day1 = {
  first: calculateTotalDistance, // 2375403
  second: similarityScore, // 23082277
};
