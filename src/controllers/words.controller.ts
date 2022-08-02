const wordsService = require("../services/words.service");

export const words = (req: any, res: any) => {
  try {
    let data = wordsService.words();
    res.send({
      status: 200,
      data,
    });
  } catch (e) {
    res.send({
      status: 500,
      message: "Internal Server Error",
    });
    throw e;
  }
};

export const rank = (req: any, res: any) => {
  try {
    const score: number = req.body.score;
    let rank = wordsService.rank(score);
    res.send({
      status: 200,
      rank,
    });
  } catch (e) {
    res.send({
      status: 500,
      message: "Internal Server Error",
    });
    throw e;
  }
};
