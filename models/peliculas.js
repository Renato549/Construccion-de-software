const db = require('../util/database');


module.exports = class Peliculas{

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre,descripcion,imagen) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO peliculas (nombre, descripcion,imagen) VALUES (?, ?,?)',
        [this.nombre, this.descripcion,this.imagen]
    );
    }


    static fetchOneMo(idPelicula) {
        return db.execute('SELECT * FROM peliculas WHERE idPelicula=?', [idPelicula]);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAllMovies() {
       console.log(db.execute('SELECT * FROM peliculas'));
        return db.execute('SELECT * FROM peliculas');
    }
 
}