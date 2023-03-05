console.log("test logging server");
const fs = require("fs");
const las = require("las-reader");
const lasStream = new las.LasStream(options);

/* Handle Events  */
lasStream.on("error", (error) => {
    console.log("error", error);
});
lasStream.on("onParseHeader", (header) => {
    //show the header when parsed
    console.log(header);
});
lasStream.on("onParseVLR", (vlr) => {
    //the variable length records
});
lasStream.on("onGotProjection", (projection) => {
    console.log("onGotProjection");
    console.log(projection);
});

lasStream.on("onFinishedReadingRecords", (count) => {
    console.log(`got ${count} records`);
});
const myWritableStream = createWritableSomehow();

var rs = fs.createReadStream("my_las_file.las", { autoClose: true });
rs.pipe(lasStream).pipe(myWritableStream());
console.log("test logging server");
