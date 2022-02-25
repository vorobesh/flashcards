class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view
  }

  async run() {
    // Просим экземпляр класса модели прочитать папку со всеми темами и составить меню.
    const menu = await this.model.makeMenu()
    // console.log(menu);

    const strQA = await this.model.makeQuestionsAnswers(menu, 1);
    // console.log(strQA);

    const arrQA = await this.model.makeArrQA(strQA);
    console.log(arrQA);
    // Попутно передаем метод контроллера this.printTopicsController,
    // так как нам нужно отправить сформинованное меню на вывод в экземпляр класса view
    // после того, как завершится асинхронная операция чтения папки

    const topicID = await this.view.getTopic()
  }

  // printTopicsController(topicsMenu) {
  //   // Тут нужно попросить экземпляр класса view вывести меню пользователю,
  //   // а также дождаться ответа последнего
  // }

  
}

module.exports = Controller
