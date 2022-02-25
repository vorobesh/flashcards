class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view
  }

  async run() {
    // Просим экземпляр класса модели прочитать папку со всеми темами и составить меню.
    const menu = await this.model.makeMenu()
    
    const beautyMenu = await this.model.makeBeautyMenu(menu)
    // console.log(menu);
    const topicID = await this.view.getTopic(beautyMenu)

    const strQA = await this.model.makeQuestionsAnswers(menu, topicID);
    // console.log(strQA);

    const arrQA = await this.model.makeArrQA(strQA);
    
    for (let i = 0; i < arrQA.length; i++) {
      const answer = await this.view.showQuestion(arrQA[i][0])

      if (answer.toLowerCase() === arrQA[i][1].toLowerCase()) {
        console.log("\x1b[32m%s\x1b[0m", `\n Правильно!`)
        console.log(`Правильный ответ: ${arrQA[i][1]}\n`);
      } else {
        console.log("\x1b[31m%s\x1b[0m", `\n Неправильно!`);
        console.log(`Правильный ответ: ${arrQA[i][1]}\n`);
      }
    }
      
      // console.log(arrQA);
    // Попутно передаем метод контроллера this.printTopicsController,
    // так как нам нужно отправить сформинованное меню на вывод в экземпляр класса view
    // после того, как завершится асинхронная операция чтения папки

  }

  // printTopicsController(topicsMenu) {
  //   // Тут нужно попросить экземпляр класса view вывести меню пользователю,
  //   // а также дождаться ответа последнего
  // }

  
}

module.exports = Controller
