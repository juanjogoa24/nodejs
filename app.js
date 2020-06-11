const fs = require('fs');

let base = 3;
let data = '';
for (let i = 1; i <= 10; i++) {

    data += (`${base} * ${i} = ${base * i} \n`);

}

//const data = new Uint8Array(Buffer.from('Hello Node.js'));
fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});