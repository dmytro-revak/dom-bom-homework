  debugger
var addEmployee = document.querySelector('.addEmployee');
var employeeList = document.querySelector('.employeeList');

var addingFields = document.querySelectorAll('.newEmployeeField input[type="text"]');

// addingNewEmployee(addingFields);

var newSpansFotList = [];
function addingNewEmployee(addingFields) {
  for (var i = 0; i < addingFields.length; i++) {
    newSpansFotList.push(addingFields[i].value);
  }
}

addEmployee.addEventListener('click', function() {
  addingNewEmployee(addingFields);
  console.log(newSpansFotList);
});