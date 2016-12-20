(function implementValidaton() {
  createForm();

  // The next array has inside the future form elements with their attributes 
  var formElementsDefaultList = [
    ageElement = {
      type: 'text', 
      name: 'age',
      placeholder: '18'
    },
    nameElement = {
      type: 'text', 
      name: 'username',
      placeholder: 'user_Frodo'
    },
    dateElement = {
      type: 'text', 
      name: 'date',
      placeholder: 'dd/mm/yyyy'
    },
    submitElement = {
      type: 'submit', 
      value: 'Validate Me'
    }
  ];

  createAndAddFormElements(formElementsDefaultList);

// The next function get objects from default list and craete all form elements, add attribures which they need and set then in the form
  function createAndAddFormElements(formElementsDefaultList) {
    var $formElements  = [];
    for (var i = 0; i < formElementsDefaultList.length; i++) {
      var $currentElement = formElementsDefaultList[i];
      var $formElement = document.createElement('input');
      for (var key in $currentElement) {
        $formElement.setAttribute(key, $currentElement[key]);
      }
      $formElements.push($formElement);
    }

    var currentForm = document.querySelector('[name="login"]');
    for (var i = 0; i < $formElements.length; i++) {
      currentForm.appendChild($formElements[i]);
    }
  }
  // The next function create form and set it in body, before script tags
  function createForm() {
    var $form = document.createElement('form');
    $form.name = 'login';
    $form.action = 'google.com';
    document.body.insertBefore( $form, document.querySelector('[type="text/javascript"]') );
 }
})();
