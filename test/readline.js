const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`你叫什么名字?\t`, (name) => {
  console.log(`你好，${name}!`);
  readline.close();
});
