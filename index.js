const myInformations = require('./information');

const cowsay = require("cowsay");

console.log(cowsay.say({
    text: `Hi, my name is ${myInformations.name} and I studying at ${myInformations.campus} campus`,
}));