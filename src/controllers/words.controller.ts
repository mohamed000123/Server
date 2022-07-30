const wordsService = require("../services/words.service");


export const words = (req: any, res: any) => {
try{
 let data = wordsService.words();
  res.send({
    status:200,
    data
  });
}catch{
  res.send({
    status:500,
    message:"Internal Server Error"
  });
}
};

export const rank = (req: any, res: any) => {
  try{
const score : number = req.body.score;
let rank = wordsService.rank(score);
  res.send({
    status:200,
    rank
  });
}catch{
  res.send({
    status:500,
    message:"Internal Server Error"
  });
}
};


