import inquirer from "inquirer";



let student_DB:any[] = []
let Course_offered = ['HTML & CSS', 'Typescript', 'NextJS', 'Python', 'Database']

let i = true;

do{

let select_operation = await inquirer.prompt({name:'operation' , type:'list', choices:['Add_student','Update_student','Delete_student','View_Student_Data','Exit']})

if(select_operation.operation == 'Add_student'){

let Add_student = await inquirer.prompt([{name:'student_name',type:'input',message:'Please enter a student name: '},{name:'Father_name',type:'input', message:'Please enter the student father name: '},{name:'Roll_no',type:'number',message:'Enter the roll no: '},{name:'course_select', type:'list', message: 'Please select the course', choices:Course_offered}])


student_DB.push(Add_student)

}

else if(select_operation.operation === 'Update_student'){

let update = await inquirer.prompt({name:'update_data', type:'list', message:'Please select the student roll no: ', choices:student_DB.map(student => student.Roll_no)})



let for_update = await inquirer.prompt({name:'select_key', type:'list', message:'Please select the key which  you want to change/update: ', choices:['student_name', 'Father_name', 'Roll_no', 'course_select']})

if(for_update.select_key === 'course_select'){

student_DB.map(student => {

if(student.Roll_no === update.update_data){

    console.log(`Dear ${student.student_name} \n you have selected  '${student.course_select}' course`);


}
})


let select_new_course = await inquirer.prompt({name:'new_course', type:'list', message: 'Please select a course again: ', choices:Course_offered});

student_DB.map(student1 => 
{
if(student1.Roll_no === update.update_data){
    student1['course_select'] = select_new_course.new_course

}
})

}


else if(for_update.select_key === 'student_name' || 'Father_name' || 'Roll_no'){

let std_data = await inquirer.prompt({name:'up_item', type:'input', message:'Please enter the revised name / rollno: '})
student_DB.map(std2 => {
    if(std2.Roll_no === update.update_data){

    std2[for_update.select_key] = std_data.up_item

}

})


}
}


else if(select_operation.operation === 'Delete_student'){

    console.log(student_DB)

let delete_from_DB = await inquirer.prompt({name:'Delete_Rollno', type:'list', message:'Please select the Roll no of a student: ', choices:student_DB.map(student => student.Roll_no)})

let del = student_DB.filter(student => student.Roll_no != delete_from_DB.Delete_Rollno)
student_DB = del
}



else if(select_operation.operation == 'View_Student_Data'){

console.log(student_DB)
    
}

else if(select_operation.operation === 'Exit'){

let to_end = await inquirer.prompt({name:'end_programe', type:'confirm', message: 'Are you sure to exit programe. \n', default:true})

i = !to_end.end_programe;

}

}
while(i)

