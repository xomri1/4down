const got = require("got");
const cron = require("node-cron");
const fs = require("fs");
const files = ["url1", "url2", "url3", "url4"];

const forLoop = async (fileList) => {
  try {
    for (let i = 0; i < fileList.length; i++) {
      const fileName = "url:c";
      const response = await got(fileList[i]);
      const file = fs.createWriteStream(fileName);
      file.write(response.body);
    }
  } catch (e) {
    console.log(e);
  }
};

const main = async () => {
  await forLoop();
};

cron.schedule("0 8 1-31 1-12 * ", async () => {
  await main();
  console.log("done");
});
