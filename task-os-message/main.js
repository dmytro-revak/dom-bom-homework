
(function () {

  var navigatorMessageMap = {
    'mac': 'macos',
    'iphone': 'macos',
    'win': 'windows',
    'lin': 'linux'
  };

  var platform = navigator.platform.toLowerCase();

  for (var key in navigatorMessageMap) {
    key = key.toLowerCase();
    var version = navigatorMessageMap[key];
    var $osMessage;

    if (platform.indexOf(key) >= 0){
      getTheOsMessage(version);
      showTheCorrecMessage($osMessage);

    }
  }

  function getTheOsMessage(version) {
    $osMessage = document.querySelector('div[data-version=' + version +']');
  }

  function showTheCorrecMessage($osMessage) {
    $osMessage.classList.remove('download-message');
  }

})();
