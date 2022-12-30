//first will import fs for Async and Distrture the required read and write

const { readFile, writeFile } = require("fs");

//Actually U Can See The Below Code Its CallBack hell...

readFile("./Content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./Content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./Content/result-async.txt",
      `Here we go: ${first},${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("success");
      }
    );
  });
});

//disAdvantage
//--->Its Has CallBack Hell
//--->Its Work Async Way

//Advantage
//--->UnLike Sync Method Its Can Handle Work Load Easly...
//--->Its To Intil The data And Jump To Next One And Perviews process Done On Background...
