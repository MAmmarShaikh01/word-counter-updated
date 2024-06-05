#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"
let condition = true
let answer
while (condition) {

    answer = await inquirer.prompt([{
        name: "sentence",
        type: "input",
        message: chalk.red("Enter your sentence: ")
    }])

    if (answer.sentence !== '') condition = false

}
//   my    name
let sep = answer.sentence.split(" ")
let newArr: string[] = []


sep.forEach((word: string) => {
    if (word != "") {
        newArr.push(word)
    }
})


if (newArr.length === 1) {
    console.log(chalk.green(`there is only ${newArr.length} word in the sentence`))
    console.log(chalk.green(`${newArr.join(" ")}`))
} else {
    console.log(chalk.green(`there are ${newArr.length} words in the sentence`))
    console.log(chalk.green(`${newArr.join(" ")}`))
}