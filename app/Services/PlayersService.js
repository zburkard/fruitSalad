import { appState } from "../AppState.js"
import { Player } from "../Models/Player.js"
import { saveState } from "../Utils/Store.js"


class PlayersService {
  createPlayer(formData) {
    let newPlayer = new Player(formData)
    appState.players = [...appState.players, newPlayer]
    saveState('players', Player)
    console.log("Test:", test)
  }

  setActivePlayer(playerId) {
    let foundPlayer = appState.players.find(p => p.id == playerId)
    appState.activePlayer = foundPlayer
  }

  randomFruit() {
    let randomNumber = Math.floor(Math.random() * appState.fruits.length)
    let newRandomFruit = appState.fruits[randomNumber]
    // @ts-ignore
    appState.activeFruit = newRandomFruit
    // newRandomFruit = appState.activeFruit
  }
  checkFruitForm(formData) {
    if (appState.activeFruit == formData.fruitWord) {
      // @ts-ignore
      appState.activePlayer.score++
      appState.activePlayer.highScore++
      // @ts-ignore
      console.log('Player score:', appState.activePlayer.score);
    }
  }

}







export const playersService = new PlayersService()