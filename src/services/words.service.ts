let TeseData = require("../../TestData.json");

export const words = () => {
  let types: string[] = [];
  let selectedObjects: { id: number; word: string; pos: "string" }[] = [];
  while (
    // checking that the returned data has the correct format (the four wanted types)
    !types.includes("noun") &&
    !types.includes("verb") &&
    !types.includes("adverb") &&
    !types.includes("adjective")
  ) {
    // shuffling the data to get a random selection including the 4 wanted types
    const shuffledArray = TeseData.wordList.sort(() => 0.5 - Math.random());
    // selecting the first ten elements of the shuffled array
    selectedObjects = shuffledArray.slice(0, 10);
    selectedObjects.forEach(
      (word: { id: number; word: string; pos: "string" }) => {
        types.push(word.pos);
      }
    );
  }
  return selectedObjects;
};

export const rank = (score: number) => {
  const scoresCount: number = 30;
  const scores: number[] = TeseData.scoresList;
  let smallerScores: number[] = [];
  // selecting the scores that are smaller than the requested score
  scores.forEach((eachScore: number) => {
    if (eachScore < score) {
      smallerScores.push(eachScore);
    }
  });
  // calculating the rank of the requested score
  const smallerScoresCount: number = smallerScores.length;
  let TestRank: number = parseFloat(
    ((smallerScoresCount / scoresCount) * 100).toFixed(2)
  );
  return TestRank;
};
