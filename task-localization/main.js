(function implementLocalization() {
  setDefaultHash();
  getAllRadioButtons();
  getCurrentLanguage(radioButtons);
  getAllWelcomeMessages();

  function setDefaultHash() {  
    location.hash = '';
  }

  //  The next function take all radio buttons, which have atributte "lang" to object
  var radioButtons;
  function getAllRadioButtons() {
    radioButtons = document.querySelectorAll('[name="lang"]');
    return radioButtons;
  }

  // The next function get each radio button and take it event listener for changing hash when user click on button also she set 'ua' hash for default greeting
  function getCurrentLanguage(radioButtons) {
    location.hash = 'ua';
    radioButtons.forEach(function(elementOfradioBut) {
      elementOfradioBut.addEventListener("click", function() {
        location.hash = elementOfradioBut.value;
      });
    });
  }

  // The next function get all messages to one object
  var welcomeMessages;
  function getAllWelcomeMessages() {
    welcomeMessages = document.getElementsByClassName('lang');
    return welcomeMessages;
  }

// The next function implement all actions for changing greeting one another 

window.onhashchange = function () {
  cleanAllMessages (welcomeMessages);
  getLocationHashValue();
  showLocalizationMessage(welcomeMessages, valueOfHash);


  //  The next function cleans class visilble for all messages
  function cleanAllMessages (welcomeMessages) {
    for (var i = 0; i < welcomeMessages.length; i++) {
      var messageItem =  welcomeMessages[i];
      messageItem.classList.remove("visible");
    }
  }

  //  The next function get value of hash without the #;
  var valueOfHash;
  function getLocationHashValue() {
    valueOfHash = location.hash.substr(1, 2);
    return valueOfHash;
  }

  // The next function add visible class to messages which I nedd;

  function showLocalizationMessage(welcomeMessages, valueOfHash) {
    for (var i = 0; i < welcomeMessages.length; i++) {
      var messageItem =  welcomeMessages[i];
      var messageClassList = messageItem.classList;
      for (var a = 0; a < messageClassList.length; a++) {
        if (messageClassList[a] === valueOfHash) {
          messageItem.classList.add("visible");
        }
      }
    }
  }
};
})();
