
export class Fruit {
  constructor(data) {
    this.name = data.name
  }

  get FruitTemplate() {
    return `
    <div class="col-4 card text-center">
        <span>${this.name}</span>
        <input type="text" id="fruit" name="fruit">
        <button>Enter</button>
      </div>
    `
  }

}