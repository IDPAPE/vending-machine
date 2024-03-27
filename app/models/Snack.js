


export class Snack {
    constructor(data) {
        this.name = data.name
        this.price = data.price
        this.stock = data.stock
        this.imgUrl = data.imgUrl
    }

    get snackCard() {
        return `
        <div class="col-6 col-lg-3">
            <div class="card text-start bg-celadon m-3 shadow" onclick="app.SnacksController.buySnack('${this.name}')">
                <img class="card-img-top" src="${this.imgUrl}" alt="Title" />
                <div class="card-body">
                    <h4 class="card-title">${this.name} <hr /></h4>
                    <p class="card-text">$${this.price.toFixed(2)}</p>
                    <p class="card-text">${this.stock}</p>
                    
                </div>
            </div>
        </div>
        `
    }
    get mySnackCard() {
        return `
        <div class="col-lg-6 col-12">
            <div class="card text-start bg-celadon m-3 shadow" onclick="app.SnacksController.buySnack('${this.name}')">
                <img class="card-img-top" src="${this.imgUrl}" alt="Title" />
                <div class="card-body">
                    <h4 class="card-title">${this.name} <hr /></h4>
                    <p class="card-text">$${this.price.toFixed(2)}</p>
                    
                </div>
            </div>
        </div>
        `
    }
}