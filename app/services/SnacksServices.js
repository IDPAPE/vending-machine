import { AppState } from "../AppState.js"
import { Snack } from "../models/Snack.js"

class SnacksService {

    addMoney() {
        AppState.money += .25
    }

    buySnack(snackName) {
        console.log
        let selectedSnack = AppState.snacks.find(snack => snack.name == snackName)
        console.log(selectedSnack)
        if (AppState.money >= selectedSnack.price) {
            console.log(`dispensing 1 ${selectedSnack.name}`)
            AppState.money -= selectedSnack.price
        }
    }
}








export const snacksService = new SnacksService()