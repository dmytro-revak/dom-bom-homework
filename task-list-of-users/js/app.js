(function implementAddingEmployees() {
  // The followind variables saves the page elements which we will use later 
  var $addEmployeeButton = document.querySelector('.addEmployee');
  var $employeeList = document.querySelector('.employeeList');
  var $inputFields = document.querySelectorAll('.newEmployeeField input[type="text"]');

  // We add click listenet for add button
  $addEmployeeButton.addEventListener('click', function() {
    // We veryfies employee information and add new employee when it's all right
    fieldsValidation($inputFields);
    if (isAllFieldsCorrect === true) {
      createTheEmployeeItem($inputFields, $employeeList);
    }
  });




//----------------------------------Start functions description---------------------------------------------------------------

  // The following function verifies user employee information and saves allow to add it to list in variable
  var isAllFieldsCorrect = true;
  function fieldsValidation(inputFields) {
    
    var isCurrentFieldCorrect = true;
    
    var validationRules = {
      'require' : function (value, inputElement) {
        if (value === '') {
          alert('Sorry, we are prestigious organization. We cannot hire employee without ' + inputElement.name);
          isCurrentFieldCorrect = false;
        }
      },
      'textInformation' : function (value) {
        var firstUppercase = /^[А-ЯёЁA-Z]/;
        var onlyText = /[а-яА-ЯёЁa-zA-Z]/g;
        if (value.match(firstUppercase) === null) {
          alert('The First name and Second name have to begin with uppercase');
          isCurrentFieldCorrect = false;
          return false;
        }
        var currentValue = value.replace(onlyText, '');
        if (currentValue) {
          alert('The First name, Second name and Position fields have to contain only letters');        
          isCurrentFieldCorrect = false;
        }
      },
      'salary' : function (value) {
        var onlyNumbers = /[0-9]/g;
        var currentValue = value.replace(onlyNumbers, '');
        if (currentValue) {
          isCurrentFieldCorrect = false;
          alert('The Salary field have to contain only digits');
          return false;
        }
      }
    };

    // The following variables save validation functions from rule object
    var require = validationRules.require;
    var textInformation = validationRules.textInformation;
    var salary = validationRules.salary;

    // The following loop implement vlidation for each field
    for (var i = 0; i < inputFields.length; i++) {
      if (isCurrentFieldCorrect === true) {
        var currentInputElement = inputFields[i];
        var currentInputElementValue = currentInputElement.value;
        
        require(currentInputElementValue, currentInputElement);
      
        if (isCurrentFieldCorrect === true) {
          if (currentInputElement.name !== 'Salary') {
            textInformation(currentInputElementValue);
          } else {
            salary(currentInputElementValue);
          }
        }

        if (isCurrentFieldCorrect === false) {
          isAllFieldsCorrect = false;
        }
      }
    } 
  }

  // The following function creats list item (new employee) and sets it in factory list 
  function createTheEmployeeItem($inputFields, parentElement) {
    var $item = document.createElement('li');
    for (var i = 0; i < $inputFields.length; i++) {
      var currentInputElement = $inputFields[i];
      var $itemSpan = document.createElement('span');
      $itemSpan.className = 'employee' + currentInputElement.name; 
      if (currentInputElement.name === 'Salary') {
        $itemSpan.textContent = '$ ' + currentInputElement.value + ' ';    
      } else {
        $itemSpan.textContent = currentInputElement.value + ' ';
      }
      $item.appendChild($itemSpan);
    }
    parentElement.appendChild($item);
  }


//----------------------------------End functions description-----------------------------------------------------------------































})();