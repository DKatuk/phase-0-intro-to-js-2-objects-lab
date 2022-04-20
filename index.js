// Write your solution in this file!
let employee = {
    name : "Dilara",
    streetAddress: 94
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const employees= { ...employee};
    employees[key] = value;
    return employees;
}
updateEmployeeWithKeyAndValue(employee, "name", "Sam");

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key,value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const employee1= { ...employee};
    delete employee1[key];
    return employee1;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}
