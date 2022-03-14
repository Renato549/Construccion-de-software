const fs = require('fs');

var se = [];

fs.readFile('./cont/series.json', (err, data) => {
    if (err) throw err;
    se = JSON.parse(data);
});


module.exports = class Series{

    constructor(n_name) {
        this.nombre = n_name;
    }

    save() {
        se.push(this);
        let serie = JSON.stringify(se);
        fs.writeFileSync('./cont/series.json', serie, 'utf8');
    }

    static fetchAllSeries() {
        return se;
    }  
}