const fs = require('fs');
const PATH = './topics';

class Model {
  constructor() {

  }

  makeMenu() {
    return new Promise((resolve, reject) => {
      fs.readdir(PATH, (err, arrOfTopics) => {
        if (err) {
          reject(err)
        }
        resolve(arrOfTopics)
      })
    })
  }

  makeQuestionsAnswers(arrQA, numOfTopic) {
    return new Promise((resolve, reject) => {
      fs.readFile(`${PATH}/${arrQA[numOfTopic - 1]}`, 'utf-8', (err, data) => {
       if (err) {
          reject(err)
         } else {
          resolve(data)
         }
       })
    })
  }

  makeArrQA(strQA) {
    let resultArr = [];
    strQA = strQA
      .split('\n')
      .filter(item => (item));

    for (let i = 1; i < strQA.length; i+=2) {
      resultArr.push([ strQA[i - 1] , strQA[i] ])
    }
    return resultArr;  
  }
}

module.exports = Model
