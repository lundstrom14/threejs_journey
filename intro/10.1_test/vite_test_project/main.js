import "./style.css";
import javascriptLogo from "./javascript.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
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
