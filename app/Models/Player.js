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
    <div onclick="app.playersController.setActivePlayer('${this.id}')" class="col-4 card shadow selectable">
    <h1>${this.name}</h1>\
    <h1>${this.score}</h1>
  </div>
    `
  }


  static getPlayerFormTemplate() {
    return `
    <form>
    <div class="mb-3">
      <label for="name" class="name-label">name</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      <div id="name" class="form-text"></div>
      <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
    `
  }

  get ActivePlayerTemplate() {
    return `
    <div class="col-3 card">
          <div>${this.name}</div>
          <div>${this.score}</div>
          <div>${this.highScore}</div>
        </div>
    
    `
  }

}

