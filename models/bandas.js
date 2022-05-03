
const db = require('../util/database');


module.exports = class Bandas{

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre,descripcion,imagen) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO bandas (nombre, descripcion,imagen) VALUES (?, ?,?)',
        [this.nombre, this.descripcion,this.imagen]
    );
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAllBandas() {
       console.log(db.execute('SELECT * FROM bandas'));
        return db.execute('SELECT * FROM bandas');
    }
 
}