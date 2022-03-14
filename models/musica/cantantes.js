
const fs = require('fs');

var Cant = [];

fs.readFile('./cont/cantantes.json', (err, data) => {
    if (err) throw err;
    Cant = JSON.parse(data);
});

module.exports = class Artistas{

    constructor(n_name) {
        this.nombre = n_name;
    }

    save() {
        Cant.push(this);
        let cantante = JSON.stringify(Cant);
        fs.writeFileSync('./cont/cantantes.json', cantante, 'utf8');
    }

    static fetchAllCant() {
        return Cant;
    }
}