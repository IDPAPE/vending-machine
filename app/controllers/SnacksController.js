import { AppState } from "../AppState.js"
import { setHTML } from "../utils/Writer.js"

export class SnacksController {
    constructor() {
        console.log(`snacks page loaded`)
        this.drawSnacks()
    }

    drawSnacks() {
        let snacks = AppState.snacks
        let snacksHTML = ``
        snacks.forEach(snack => snacksHTML += snack.snackCard)
        console.log(snacksHTML)
        setHTML(`snack-cards`, snacksHTML)
    }
}