class Building {
    constructor(name) {
        this.name = name;
    }

    buildingName() {
        return `<b>Building name:</b> <i>${this.name}</i>`;
    }
}

class Store extends Building {
    constructor(name, type) {
        super(name);
        this.type = type;
    }

    storeType() {
        return `${this.buildingName()} <br> <b>Type:</b> <i>${this.type}</i>`;
    }
}

let details = new Store('Chrysler', 'Shoe');
document.getElementById('place').innerHTML = details.storeType();