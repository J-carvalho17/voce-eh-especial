/*import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
      message: "Type in your URL:",
      name: "URL",
    }
  ])
  .then((answers) => {
    const url = answers.URL;
    const qrCode = qr.image(url);
    qrCode.pipe(fs.createWriteStream('qr.png')); // <- aqui usamos o fs importado
    console.log('QR code gerado com sucesso!');
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt não pôde ser renderizado no ambiente atual");
    } else {
      console.log("Ocorreu um erro:", error);
    }
  });

*/

import qr from 'qr-image';
import fs from 'fs';

const html = `
<!DOCTYPE html>
<html>
  <head><title>Você é especial</title></head>
  <body>
    <h1>Você é especial! 💖</h1>
    <p>Espero que você tenha um dia incrível!</p>
  </body>
</html>
`;

const dataURL = 'data:text/html,' + encodeURIComponent(html);
const qrCode = qr.image(dataURL);
qrCode.pipe(fs.createWriteStream('qr.png'));

console.log('QR code gerado!');
