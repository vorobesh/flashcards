const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class View {
  constructor() {

  }

  getTopic() {
    return new Promise((resolve, reject) => {
      rl.question(`Начнем игру \n 1 \n 2 \n 3 \n`, (topic) => {
        // const m = []
        // m.push(`${name}`)
        // rl.close();
        // console.log(`${m}`);

        resolve(topic)
      });
    })
  }
} 


// not indentical
module.exports = View
