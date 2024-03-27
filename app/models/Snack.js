


export class Snack {
    constructor(data) {
        this.name = data.name
        this.price = data.price
        this.imgUrl = data.imgUrl
    }

    get snackCard() {
        return `
        <div class="col-4">
            <div class="card text-start bg-celadon m-3 shadow">
                <img class="card-img-top" src="${this.imgUrl}" alt="Title" />
                <div class="card-body">
                    <h4 class="card-title">${this.name} <hr /></h4>
                    <p class="card-text">$${this.price}</p>
                </div>
            </div>
        </div>
        
        `
    }
}