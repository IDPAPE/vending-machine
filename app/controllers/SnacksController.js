import { AppState } from "../AppState.js"
import { snacksService } from "../services/SnacksServices.js"
import { setHTML } from "../utils/Writer.js"

export class SnacksController {
    constructor() {
        console.log(`snacks page loaded`)
        this.drawSnacks()

        AppState.on(`snacks`, this.drawSnacks)
        AppState.on(`money`, this.drawMoney)
        AppState.on(`mySnacks`, this.drawMySnacks)

    }

    drawSnacks() {
        let snacks = AppState.snacks
        let snacksHTML = ``
        snacks.forEach(snack => snacksHTML += snack.snackCard)
        console.log(snacksHTML)
        setHTML(`snack-cards`, snacksHTML)
    }

    drawMySnacks() {
        let mySnacks = AppState.mySnacks
        let mySnacksHTML = ``
        mySnacks.forEach(snack => mySnacksHTML += snack.mySnackCard)
        setHTML(`my-snacks`, mySnacksHTML)
    }

    drawMoney() {
        let money = AppState.money.toFixed(2)
        let moneyHTML = `$${money}`
        setHTML(`money-display`, moneyHTML)

    }

    addMoney() {
        console.log(`you found some change`)
        snacksService.addMoney()
    }

    buySnack(snackName) {
        console.log(`selected ${snackName}`)
        snacksService.buySnack(snackName)
    }
}