process.stdout.write("prompt > ");
const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");
const curl = require("./curl");
const date = require("./date");

process.stdin.on("data", (data) => {
  const argumentArray = data.toString().trim().split(" ");
  const cmd = argumentArray[0];
  const fileName = argumentArray[1];

  if (cmd === "pwd") {
    pwd(done);
  }

  if (cmd === "ls") {
    ls(done);
  }

  if (cmd === "cat") {
    cat(fileName, done);
  }

  if (cmd === "curl") {
    curl(fileName, done);
  }
  // process.stdout.write('You typed: ' + cmd);
  //   process.stdout.write("\nprompt > ");
  if (cmd === 'date') {
  }

});

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
};
