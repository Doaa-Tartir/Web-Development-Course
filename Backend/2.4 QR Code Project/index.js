/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";
inquirer.prompt([{name:"URL",message:"Enter a valid URL:",type:"input"}]).then((answer)=>{
    console.log(answer.URL);  
    var qr_png = qr.image(answer.URL); //default type is png
    qr_png.pipe(fs.createWriteStream("qr_code.png"));
    fs.writeFile("URL.txt",answer.URL, err=>{
    if(err) throw err;
    console.log("Your URL has been saved successfully in a text file.")});
});