#! \usr\bin\env node 
//npm i --save-dev @types/inquirer
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence to count the word: "
    }
]);
const words = answers.sentence.trim().split("  ");
console.log(words);
console.log(`your sentence count word is ${words.length}`);
