/* Path is Actualy Used to show path Of your directory*/

const path = require("path");
console.log(path.sep);

//Even The Required File In The Nested Folder And We Can Join The Path...As Per Our Wise

const filePath = path.join("/Content", "SubFolter", "text.txt");
console.log(filePath);

//base Is Actually Show The File That We Required Using Path Join Simple Its Show The Exact File Name

const base = path.basename(filePath);
console.log(base);

//In Some Specific Time We Required An Absolute Path In Our Project

const Absolute = path.resolve(__dirname, "Content", "SubFolter", "text.txt");
console.log(Absolute);
