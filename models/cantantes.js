
const db = require('../../util/database');


module.exports = class Artistas{


    constructor(nombre,descripcion,imagen) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }


    save() {
        return db.execute('INSERT INTO cantantes (nombre, descripcion,imagen) VALUES (?, ?,?)',
        [this.nombre, this.descripcion,this.imagen]
    );
    }


    static fetchAllArtistas() {
        return db.execute('SELECT * FROM cantantes');
    }
 
}