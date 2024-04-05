#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

let answers = await inquirer.prompt([
  {
    name: "Cheese",
    type: "list",
    choices: [
      "Cheddar Cheese",
      "Mozerella Cheese",
      "Feta Cheese",
      "Blue cheese",
      "Camembert",
    ],
    message: "SELECT YOUR FAVOURITE CHEESE?",
  },
]);

console.log(chalk.bgCyan.blueBright("You have selected", answers.Cheese));
