const names = ["dhrupad","Neel","heer","Vedant"];
const lowercase = names.map( name => name[0].toLowerCase() + name.slice(1))
console.log(lowercase)

const para = names.map( name => `<p>${name} </p>` )
console.log(para)

const num = [2,4,6,8];
const doubled = num.map( n => n*2)
console.log(doubled)