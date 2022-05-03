
const fs = require('fs');

var Bands = [];


fs.readFile('./cont/bandas.json', (err, data) => {
    if (err) throw err;
    Bands = JSON.parse(data); 
});

module.exports = class Bandas{

    constructor(n_name) {
        this.nombre = n_name;
    }

    save() {
        Bands.push(this);
        let banda = JSON.stringify(Bands);
        fs.writeFileSync('./cont/bandas.json', banda, 'utf8');
    }

    static fetchAllBands() {
        return Bands;
    }
}