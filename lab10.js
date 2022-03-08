
const fs = require("fs");
const readline = require('readline');

const caps1 = [];
const caps2 = [];
const caps3 = [];

function read_line (arch,array){
    const readInterface = readline.createInterface({
        input: fs.createReadStream(arch),
        output: process.stdout,
        console: false
    });
    readInterface.on('line', function(line) {
        array.push(line)
    });
}

read_line('kim.txt',caps1);
read_line('altered carbon.txt',caps2);
read_line('MobPsycho.txt',caps3);


const http = require('http');

const server = http.createServer( (request, response) => {
    if (request.url === '/') { //Creación de la pagína de inicio
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html lang="es-mx"><head>');
        response.write('<meta charset="utf-8">');
        response.write('<title>lab10</title>');
        response.write('</head><body>');
        response.write('<h1 id="principal"> laboratorio 10: Rutas y formas.</h1>');
        response.write('<p>Renato Sebastian Ramirez Calva</p>')
        response.write('<br><br>');
        response.write('<p>A01275401</p>')
        response.write('<br><br>');
        response.write('<p>Bienvenido a la página principal de los mejores capitulos de estas series.</p>')
        response.write('<p><b>/Kimetsu</b> Página de Kimtesu.</p>')
        response.write('<p><b>/AlteredCarbon</b> Página de Altered Carbon.</p>')
        response.write('<p><b>/MobPsycho </b> Página de MobPsycho.</p>')
        response.write('<br><br>');
        response.write('<footer>No pues bye</footer>')
        response.write('</body>');
        response.end();
    } else if (request.url === '/Kimetsu') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html lang="es-mx"><head>');
        response.write('<title>Kimetsu no Yaiba</title>');
        response.write('<meta charset="utf-8">');
        response.write('</head><body>');
        response.write('<h1 id="principal">KnY</h1>');
        response.write('<h2>Ambientada en la era Taisho, la historia se centra en Tanjirō Kamado, un joven de beun corazon que pierde su familia por culpa de los demonios.</h2>');
        response.write('<br><br>');
        response.write('<p>Los mejores capitulos son:</p>');
        response.write('<ul>');
        for (let capitulo in caps1) {
            response.write('<li>' + caps1[capitulo] + '</li>');
        }
        response.write('</ul>');
        response.write('<br><br>');
        response.write('<a href="/">Regresar a la pagina principal</a>');
        response.write('</body>');
        response.end();
    } 
    else if (request.url === '/AlteredCarbon' && request.method === 'GET') { // Metodo GET
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html lang="es-mx"><head>');
        response.write('<title>Altered Carbon</title>');
        response.write('<meta charset="utf-8">');
        response.write('</head><body>');
        response.write('<h1 id="principal">AC</h1>');
        response.write('<h2>El único soldado que sobrevive de un grupo de guerreros que fueron derrotados en un levantamiento contra el nuevo orden mundial debe resolver un asesinato.</h2>');
        response.write('<p>Los mejores capitulos son:</p>');
        response.write('<ul>');
        for (let capitulo in caps2) {
            response.write('<li>' + caps2[capitulo] + '</li>');
        }
        response.write('</ul>');
        response.write('<br><br>');
        response.write('<h2>Aquí agregas capitulos:</h2>');        //Inicio del metodo GET
        response.write('<form action="Altered Carbon" method="POST">');
        response.write('<label for="nombre">Ingresa el capitulo: </label> ');
        response.write('<input type="text" id="cap" name="capitulo" placeholder="Capitulo">');
        response.write('<br><br>');
        response.write('<input type="submit" value="Enviar">');
        response.write('</form>');
        response.write('<br><br>');
        response.write('<a href="/">Regresar a la pagina principal</a>');
        response.write('</body>');
        response.end();
    }
    else if (request.url === '/AlteredCarbon' && request.method === 'POST') {  // Metodo POST
        const datos = [];
        request.on('data', (dato) => {
            datos.push(dato);
        });
        return request.on('end', () => {
            const datCom = Buffer.concat(datos).toString();
            const newDat = datCom.split('=')[1];
            caps2.push(newDat);
            response.setHeader('Content-Type', 'text/html');
            response.write('<!DOCTYPE html>');
            response.write('<html lang="es-mx"><head>');
            response.write('<title>Altered Carbon</title>');
            response.write('<meta charset="utf-8">');
            response.write('</head><body>');
            response.write('<h1 id="principal">Altered Carbon</h1>');
            response.write('<h2>El único soldado que sobrevive de un grupo de guerreros que fueron derrotados en un levantamiento contra el nuevo orden mundial debe resolver un asesinato.</h2>');
            response.write('<p>Los mejores capitulos son::</p>');
            response.write('<ul>');
            for (let cap in caps2) {
                response.write('<li>' + caps2[cap] + '</li>');
            }
            response.write('</ul>');
            response.write('<br><br>');
            response.write('<a href="/">Regresar a la pagina principal</a>');
            return response.end();
        });
    }
    else if (request.url === '/MobPyscho') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html lang="es-mx"><head>');
        response.write('<title>Mob Psycho</title>');
        response.write('<meta charset="utf-8">');
        response.write('</head><body>');
        response.write('<h1 id="principal">MbPo</h1>');
        response.write('<h2>Es un estudiante de octavo año de secundaria apodado Mob, un psíquico con poderosas habilidades. No es bueno en expresar como se siente y desde su infancia rara vez ha sentido o mostrado alguna emoción. .</h2>');
        response.write('<p>Los mejores capitulos son::</p>');
        response.write('<ul>');
        for (let cap in caps3) {
            response.write('<li>' + caps3[cap] + '</li>');
        }
        response.write('</ul>');
        response.write('<br><br>');
        response.write('<br><br>');
        response.write('<a href="/">Regresar a la pagina principal</a>');
        response.write('</body>');
        response.end();
    }  
    else { //Creación de la pagína 404
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html><head>');
        response.write('<meta charset="utf-8">');
        response.write('<title>Página no encontrada</title>');
        response.write('</head><body>');
        response.write('<h1 id="principal">Pagina no encontrada.</h1>');
        response.write('</body>');
        response.end();
    }
});
server.listen(3000);