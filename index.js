// Write your solution in this file!
const employee= {name: "kathy",
                streetAddress: "Utawala"}
 console.log(employee)               

function updateEmployeeWithKeyAndValue(employee,key,value) {
    const newEmployee= {...employee};
    newEmployee[key]=value;
    return newEmployee
}
   console.log(updateEmployeeWithKeyAndValue(employee,"streeAddress","kiambu"))

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key]=value;

    return employee
}   
console.log (destructivelyUpdateEmployeeWithKeyAndValue(employee,"streetAddress","kiambu"))
 
function deleteFromEmployeeByKey(employee,key) {
     const newEmployee= {...employee};
     delete newEmployee[key];
     return newEmployee
}


function destructivelyDeleteFromEmployeeByKey(employee,key) {
    delete employee[key]
    return employee
}