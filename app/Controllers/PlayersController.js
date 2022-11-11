import { appState } from "../AppState.js";
import { Player } from "../Models/Player.js";
import { playersService } from "../Services/PlayersService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { saveState } from "../Utils/Store.js";
import { setHTML } from "../Utils/Writer.js";

function _drawPlayers() {
  let players = appState.players
  let template = ''
  players.forEach(p => template += p.ListTemplate)
  console.log(players);
  setHTML('players', template)
}

function _drawActivePlayer() {
  let activePlayer = appState.activePlayer
  setHTML('active-player', activePlayer.ActivePlayerTemplate)
}



function _drawFruit() {
  let activeFruit = appState.activeFruit
  setHTML('fruit-word', activeFruit)
}



export class PlayersController {
  constructor() {
    appState.on("players", _drawPlayers)
    appState.on("activePlayer", _drawActivePlayer)
    appState.on('activeFruit', _drawFruit)
    _drawPlayers()

  }

  createPlayer() {
    window.event.preventDefault()
    let form = window.event.target
    const formData = getFormData(form)
    playersService.createPlayer(formData)
    console.log(formData);
    form.reset()


  }

  randomFruit() {
    playersService.randomFruit()
  }


  setActivePlayer(playerId) {
    playersService.setActivePlayer(playerId)
    this.randomFruit()
  }
  checkFruitForm() {
    window.event?.preventDefault()
    let form = window.event?.target
    const formData = getFormData(form)
    playersService.checkFruitForm(formData)
    console.log(formData);
    playersService.randomFruit()
    form.reset()
    _drawActivePlayer()
  }
}

