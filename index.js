const employee ={ 
    name: "Value1",
    streetAddress: "Value2",
}
function updateEmployeeWithKeyAndValue(employee, key, value){
 const newEmployee = {...employee};
 newEmployee[key] = value;
 return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;
    return employee;
}
function deleteFromEmployeeByKey(employee, object, key){
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
delete employee.name;
return employee;
}
