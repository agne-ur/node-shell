const fs = require("fs");

module.exports = (fileName, done) => {
  fs.readFile(fileName, (err, data) => {
    if (err) throw err;
    done(data);
    // console.log(data);
  });
};
