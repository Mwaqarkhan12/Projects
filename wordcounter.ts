import inquirer from "inquirer"



let word_counter = await inquirer.prompt({name:'word',type:'input',message:'Please enter the word for the counting: '})


let sentence = word_counter.word
let sentenceArray =  sentence.trim().split(' ')
console.log('The length of your array list' , sentenceArray ,' is : ', sentenceArray.length)
console.log(sentenceArray)
