(function implementValidaton() {
  // At the first we must creat a form
  createForm();

  // The next array has inside the future form elements with their attributes 
  var formElementsDefaultList = [
    ageElement = {
      type: 'text', 
      name: 'age',
      placeholder: '18',
      'data-validate': ''
    },
    nameElement = {
      type: 'text', 
      name: 'username',
      placeholder: 'user_Frodo',
      'data-validate': ''
    },
    dateElement = {
      type: 'text', 
      name: 'date',
      placeholder: 'dd/mm/yyyy',
      'data-validate': ''
    },
    submitElement = {
      type: 'submit', 
      value: 'Validate Me'
    }
  ];

  //Get form which we need
  var $currentForm = document.querySelector('[name="login"]');
  
  createAndAddFormElements(formElementsDefaultList, $currentForm);

// Start functions describe

  // The next function get objects from default list and craete all form elements, add attribures which they need and set then in the form
  function createAndAddFormElements(formElementsDefaultList, $currentForm) {
    for (var i = 0; i < formElementsDefaultList.length; i++) {
      var $currentElement = formElementsDefaultList[i];
      var $formElement = document.createElement('input');
      for (var key in $currentElement) {
        $formElement.setAttribute(key, $currentElement[key]);
        $currentForm.appendChild($formElement);
      }
    }
  }
  // The next function create form and set it in body, before script tags
  function createForm() {
    var $form = document.createElement('form');
    $form.name = 'login';
    $form.action = 'google.com';
    document.body.insertBefore( $form, document.querySelector('[type="text/javascript"]') );
  }

// End functions describe

// Star validation

  // The next variable has all elements which nedd to validate
  var $elementsForValidation = $currentForm.querySelectorAll('[data-validate]');


  //  The next function, if you click 'submit', start validation for current form and for all elemenst insdie the form
  validation($currentForm, $elementsForValidation);

  // The next function gets and saves correct placeholders each of element
  var correctPlaceholders = [];
  getAllCorrectPlaceholders($elementsForValidation);

  function getAllCorrectPlaceholders($elementsForValidation) {
    for ( var i = 0; i < $elementsForValidation.length; i++) {
      var currentCorrectPlaceholder = $elementsForValidation[i].getAttribute('placeholder');
      correctPlaceholders.push(currentCorrectPlaceholder);
    }
    return correctPlaceholders;
  }

  function validation($currentForm, $elementsForValidation) {
    $currentForm.addEventListener('submit', function (e) {
      var isFormValid;
      e.preventDefault();

      // We remove all error indicators  
      removeErrorBorder($elementsForValidation);

      // The nex function reset all red error borders from all fields 
      function removeErrorBorder($elementsForValidation) {
        for (var i = 0; i < $elementsForValidation.length; i++) {
          $elementsForValidation[i].classList.remove('errorField');
          $elementsForValidation[i].setAttribute('placeholder', correctPlaceholders[i]);
        }
      }

      // Stat validation for each element
      eachElementsValidation($elementsForValidation);

      // If form valid we can submit it
      if (isFormValid === true) {
        $currentForm.submit();
      }
      
      // Start functions describe

      // The next function gets each field and applies validation for it. Also it has an  the object with all validation functions
      function eachElementsValidation($elementsForValidation) {

        // The next function create and set error indicators for each element
        function highlightErrorField(errorElemet) {
          errorElemet.classList.add('errorField');
          errorElemet.value = '';
          errorElemet.setAttribute('placeholder', 'Error! Empty/incorrectly filled');
        }

        // The next object has rules for validation. That rules are functions which return boolean type.
        var validationRules = {
          'age': function(value, $currentValidationElement) {
            var reg = /\d/g;
            var validateValue = value.replace(reg, '');
            if (validateValue) {
              isFieldsValid = false;
              highlightErrorField($currentValidationElement);
            } else {
              isFieldsValid = true;
            }
            return isFieldsValid;
          },
          'username': function(value) {
            var reg = 'user_';
            var validateValue = value.replace(reg, '');
            if (value.indexOf(reg) !== 0 || validateValue === '') {
              isFieldsValid = false;
              highlightErrorField($currentValidationElement);
            }
            return isFieldsValid;
          },
          'date' : function(value) {
            // We get current date and save it in a today variable
            var today;
            getCurrentDate();

            if (today !== value) {
             isFieldsValid = false;
             highlightErrorField($currentValidationElement);
            }

            // The next function get current date
            function getCurrentDate() {
              today = new Date();
              var dd = today.getDate();
              var mm = today.getMonth() + 1;
              var yyyy = today.getFullYear();
              if(dd<10) {
                dd = '0' + dd;
              } 
              if( mm < 10) {
                mm = '0' + mm;
              }

              today = dd + '/' + mm + '/' + yyyy;
              return today;
            }
          }
        };

      // End functions describe

      // Tne next loop verifies user's value and return true or false in isFieldsValid variable 
      var isFieldsValid;
      for (var i = 0; i < $elementsForValidation.length; i++) {
        if (isFieldsValid === false) {
          break;
        }

        var $currentValidationElement = $elementsForValidation[i];
        var currentValue = $currentValidationElement.value;
        // elementsForValidationName is a name of current elemet, which use for finding specific rule for that element
        var elementsForValidationName = $currentValidationElement.name;
        // validateFn is a function which implements specific rules for each element
        var validateFn = validationRules[elementsForValidationName];  

        if ($currentValidationElement.value === '') {
          isFieldsValid = false;
          highlightErrorField($currentValidationElement);
          break; 
        }
        // We use specific validate function for each field
        validateFn(currentValue, $currentValidationElement);

        }

        if (isFieldsValid === true) {
          isFormValid = true;
        } else {
          isFormValid = false;
        }
        return isFormValid;
      }
    });
  }
})();
