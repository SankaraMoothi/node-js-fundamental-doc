// fs Is An FileSystem That Used To Read And Write the file...

const fs = require("fs");

// As Per The Name Say There Was An Two Methods Of Reading And Writing Method In FileSystem Sync And Async

// Both sync And Async Has Both Advantage And DisAdvantage In Both Methode

//Here We Using readFileSync To Read The File Sync

const first = fs.readFileSync("./Content/first.txt", "utf-8");
const second = fs.readFileSync("./Content/second.txt", "utf-8");

//Here We Using writeFileSync To Creat An File Sync
const result = fs.writeFileSync(
  "./Content/result-sync.txt",
  `here we go:${first},${second}...`
);

//Advantage
//--->Its Not Has Callback hell
//--->Its Work Line By Line

//DisAdvantage
//--->Its Take Long time For Every Single User
//--->If One Data get Stack Its Stop The Hole Process
