import inquirer from "inquirer";




let calc = await inquirer.prompt([{
    type:"number",
    name: "F_number",
    message:"ENTER FIRST NUMBER  ",
    
},
{
    type: "number",
    name: "Sec_number",
    message: "ENTER SECOND NUMBER",
    
},
{
type: "list",
name: "operators",
message: "PLEASE SELECT THE OPERATOR: ",
choices: ['+','-','*','/','%','POWER_OF','square root']
}
])

if(calc.operators == '+'){
console.log(calc.F_number + calc.Sec_number)
}
else if(calc.operators == '-'){
console.log(calc.F_number - calc.Sec_number)
}
else if(calc.operators == '*'){
console.log(calc.F_number * calc.Sec_number)
}
else if(calc.operators == '/'){
console.log(calc.F_number / calc.Sec_number)
}
else if(calc.operators == '%'){
    console.log(calc.F_number % calc.Sec_number)
}

else if(calc.operators == 'POWER_OF'){
console.log(calc.F_number**calc.Sec_number);
}

else if(calc.operators == 'square root'){
    console.log(Math.sqrt(calc.F_number));
    
}
else{
    console.log('INCORRECT NUMBER OR OPERATOR SECLECTED')
}

console.log(calc)
