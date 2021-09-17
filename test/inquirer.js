// 参考：https://github.com/SBoudrias/Inquirer.js/blob/master/README.md
const inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    name: "name",
    message: "你叫什么名字?",
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log(`你好 ${answers["name"]}!`);
});
