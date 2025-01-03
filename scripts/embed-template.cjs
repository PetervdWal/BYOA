// Opted to write this code in plain js to reduce build complexity over strict typing.
const fs = require('fs');
const path = require('path');


const htmlPath = path.join(__dirname, '../src/insults/insult.component.html');
const tsPath = path.join(__dirname, '../src/insults/insult.component.ts');
const htmlContent = fs.readFileSync(htmlPath, 'utf8');

// time to overwrite the code with html
let tsContent = fs.readFileSync(tsPath, 'utf8');
tsContent = tsContent.replace('private template!: string;',
    `private template: string = '${htmlContent}'`);

fs.writeFileSync(tsPath, tsContent);
console.log('Done!');
