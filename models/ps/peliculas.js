const fs = require('fs');

var pel = [];

fs.readFile('./cont/peliculas.json', (err, data) => {
    if (err) throw err;
    pel = JSON.parse(data);
});

module.exports = class Peliculas{

    constructor(n_name) {
        this.nombre = n_name;
    }

    save() {
        pel.push(this);
        let pelicula = JSON.stringify(pel);
        fs.writeFileSync('./cont/peliculas.json', pelicula, 'utf8');
    }

    static fetchAllPeliculas() {
        return pel;
    }
}