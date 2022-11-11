import { generateId } from "../Utils/generateId.js"




export class Player {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.score = 0
    this.highScore = data.highScore || 0
  }

  get ListTemplate() {
    return `
    <section class="row m-2">
    <div onclick="app.playersController.setActivePlayer('${this.id}')" class="col-2 card shadow selectable p-2">
    <h4>${this.name}</h4>\
    <h6>High Score: ${this.highScore}</h6>
  </div>
  </section>
    `
  }


  static getPlayerFormTemplate() {
    return `
    <form>
    <div class="mb-3">
      <label for="name" class="name-label">name</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      <div id="name" class="form-text"></div>
      <button class="btn btn-primary">Submit</button>
  </form>
</div>
    `
  }

  get ActivePlayerTemplate() {
    return `
    <section class="row justify-content-center">
    <div class="card col-2 p-3 bg-primary text-light mt-3">
          <h5>Current Player:${this.name}</h5>
          <h6>Current Score:${this.score}</h6>
          <h6>High Score:${this.highScore}</h6>
        </div>
    </section>
    
    `
  }

}

