const chalk = require("chalk");
const str = process.argv.slice(2).join(" ");

log = console.log;

rainbow = [chalk.red, chalk.yellow, chalk.green, chalk.blue];

function googleify(str) {
  let strArray = str.split("");
  return strArray
    .map((item, index) => rainbow[index % rainbow.length](item))
    .join("");
}

console.log(`${googleify(str)}\n`);
