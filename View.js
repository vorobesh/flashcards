const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class View {
  constructor() {

  }

  getTopic(menu) {
    return new Promise((resolve, reject) => {
      rl.question(menu, (topic) => {
        // const m = []
        // m.push(`${name}`)
        // rl.close();
        // console.log(`${m}`);

        resolve(topic)
      });
    })
  }

  showQuestion(question) {
    return new Promise((resolve, rejects) => {
      rl.question(`${question}\n`, (answer) => {
        resolve(answer);
      });
    })
  }
} 


module.exports = View
