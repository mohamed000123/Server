"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rank = exports.words = void 0;
let TeseData = require('../../TestData.json');
const words = () => {
    let types = [];
    let selectedObjects = [];
    while (
    // checking that the returned data has the correct format (the four wanted types)
    !types.includes("noun") &&
        !types.includes("verb") &&
        !types.includes("adverb") &&
        !types.includes("adjective")) {
        // shuffling the data to get a random selection including the 4 wanted types
        const shuffledArray = TeseData.wordList.sort(() => 0.5 - Math.random());
        // selecting the first ten elements of the shuffled array
        selectedObjects = shuffledArray.slice(0, 10);
        selectedObjects.forEach((word) => {
            types.push(word.pos);
        });
    }
    return selectedObjects;
};
exports.words = words;
const rank = (score) => {
    const scoresCount = 30;
    const scores = TeseData.scoresList;
    let smallerScores = [];
    // selecting the scores that are smaller than the requested score
    scores.forEach((eachScore) => {
        if (eachScore < score) {
            smallerScores.push(eachScore);
        }
    });
    // calculating the rank of the requested score
    const smallerScoresCount = smallerScores.length;
    let TestRank = parseFloat((smallerScoresCount / scoresCount * 100).toFixed(2));
    return TestRank;
};
exports.rank = rank;
