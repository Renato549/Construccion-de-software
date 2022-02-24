console.log("hola desde node:");

const filesystem = require('fs');

filesystem.writeFileSync('hola.txt', 'hola desde node');