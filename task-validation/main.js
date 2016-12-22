(function implementValidaton() {
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

  var $currentForm = document.querySelector('[name="login"]');
  
  createAndAddFormElements(formElementsDefaultList, $currentForm);
  // validation($currentForm);

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






// The next var has all elements which nedd to validate
 var $elementsForValidation = $currentForm.querySelectorAll('[data-validate]');


//  The next function start validation for current form and for all elemenst insdie the form
validation($currentForm, $elementsForValidation);
 // console.log($elementsForValidation);



function getAllCorrectPlaceholders() {
  
}

 function validation($currentForm, $elementsForValidation) {
   $currentForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // console.log('on submit');
   var isFormValid;
debugger;

    
removeErrorBorder($elementsForValidation);

// The nex function reset all red error borders from all fields 
function removeErrorBorder($elementsForValidation) {
  for (var i = 0; i < $elementsForValidation.length; i++) {
    $elementsForValidation[i].classList.remove('errorField');
  }
}


    eachElementsValidation($elementsForValidation);

// The next function gets each field and applies validation for it. Also it has an  the object with all validation functions
function eachElementsValidation($elementsForValidation) {

  function highlightErrorField(errorElemet) {
    errorElemet.classList.add('errorField');
    errorElemet.value = '';
    errorElemet.setAttribute('placeholder', 'Error! Empty/incorrectly filled');
  }
// The next object has rules for validation. That rules are functions which return boolean type.
      var validationRules = {
        'age': function(value, $currentValidationElement) {
          var reg = /\d/g;
          validateValue = value.replace(reg, '');
          console.log(validateValue);
          // console.log(typeof value);
          // ar withNoDigits = questionText.replace(/[0-9]/g, '');
          if (validateValue) {
            console.log('wrong');
            isFieldsValid = false;
            highlightErrorField($currentValidationElement);
            // $currentValidationElement.classList.add('errorField');
          } else {
            console.log('yes');
            isFieldsValid = true;
          }
            return isFieldsValid;
        },
        'username': function(value) {
          if (value.indexOf('user_') !== 0 ) {
            console.log('wrong');
            isFieldsValid = false;
            highlightErrorField($currentValidationElement);
          }
          return isFieldsValid;
        },
        'date' : function(value) {
          var today;
          getCurrentDate();

          if (today !== value) {
             console.log('wrong');
            isFieldsValid = false;
            highlightErrorField($currentValidationElement);
          }

          function getCurrentDate() {
          today = new Date();
          var dd = today.getDate();
          var mm = today.getMonth()+1;
          var yyyy = today.getFullYear();
          if(dd<10) {
              dd='0'+dd
          } 
          if(mm<10) {
              mm='0'+mm
          } 
          today = dd+'/'+mm+'/'+yyyy;
          return today;
        }
        }
      }


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
        validateFn(currentValue, $currentValidationElement);
    }

    if (isFieldsValid === true) {
      isFormValid = true;
    } else {
      isFormValid = false;
    }

    return isFormValid;
}




        













   })
 }
})();
