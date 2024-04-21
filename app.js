#! /usr/bin/env node
import inquirer from "inquirer";
const conversion = {
    USD: 1,
    EUR: 0.94,
    GBP: 0.81,
    PKR: 277.68,
    INR: 83.37,
    AED: 3.67,
    CAD: 1.38,
    CNY: 7.24
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Select a Currency to convert from:",
        choices: ["USD", "EUR", "GBP", "PKR", "INR", "AED", "CAD", "CNY"]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter amount to convert:"
    },
    {
        name: "to",
        type: "list",
        message: "Select a Currency to convert in:",
        choices: ["USD", "EUR", "GBP", "PKR", "INR", "AED", "CAD", "CNY"]
    }
]);
let fromAmount = conversion[userAnswer.from];
let toAmount = conversion[userAnswer.to];
let currencyBase = userAnswer.amount / fromAmount;
let convertedCurrency = currencyBase * toAmount;
console.log(Math.floor(convertedCurrency));
