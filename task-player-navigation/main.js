(function implementTheShootingGame() {

  setDefaultPlayerCoordinates();

  // The following function set the player for initial coordinates
  function setDefaultPlayerCoordinates() {
    document.getElementById('player').style.top = '50px';
    document.getElementById('player').style.left = '50px';  
  }


  document.body.onkeydown = function (e) {
    var $player = document.getElementById('player');
    var $playerArea = document.getElementById('playerArea');
    // The following variabe saves playing area coordinates
    var playerAreaCoordinates = $playerArea.getBoundingClientRect();
    // The following variable saves current player coordinates
    var playerCoordinates = $player.getBoundingClientRect();
    // The following variable shows permission for playing
    var areCoordinatesCorrect;
    // The following variable shows permission for player moving
    var isKeyCodeCorrect;

    // We verify player and area coordinates and check what key player have pressed
    comparingPlayerCoordinates(playerAreaCoordinates, playerCoordinates);
    keyCodevalidation(e.keyCode);

    // When verifying has been comlited we change player position. When player gets beyond the borders it loses the game. 
    playerMoving(areCoordinatesCorrect, isKeyCodeCorrect);


    // ----------------------- Start functions descriptions --------------------------------------

    // The following function implements player's moving and asks the player to continue the game. 
    function playerMoving(areCoordinatesCorrect, isKeyCodeCorrect) {
      if (areCoordinatesCorrect === true) {
        var KEYCODE_LEFT = 37;
        var KEYCODE_RIGHT = 39;
        var KEYCODE_UP = 38;
        var KEYCODE_DOWN = 40
        
        if (e.keyCode == KEYCODE_LEFT) {
          $player.style.left = (parseInt($player.style.left) - 10) + 'px';
        }
        else if (e.keyCode == KEYCODE_RIGHT) {
          $player.style.left = (parseInt($player.style.left) + 10) + 'px';
        }
        else if (e.keyCode == KEYCODE_UP) {
          $player.style.top = (parseInt($player.style.top) - 10) + 'px';
        }
        else if (e.keyCode == KEYCODE_DOWN) {
          $player.style.top = (parseInt($player.style.top) + 10) + 'px';
        }
      } else {
        if (isKeyCodeCorrect === true) {
          var wantPlayOneMore = confirm( ('Unfortunately you just have lost. Do yuo want to play one more ?') );
          if (wantPlayOneMore) {
            implementTheShootingGame();
          }
        }
      } 
    }  

  // The following function verifies the player key value 
  function keyCodevalidation(keyCode) {
    var correctKeyCodes = [37, 38, 39, 40];
    if (correctKeyCodes.indexOf(keyCode) === -1) {
      isKeyCodeCorrect = false;
    } else {
      isKeyCodeCorrect = true;
    }
    return isKeyCodeCorrect;
  }

  // The following function verifies player coordinates and doesn't allow player go beyond the area
  function comparingPlayerCoordinates(playerAreaCoordinates, playerCoordinates) {
    if (playerCoordinates.top > playerAreaCoordinates.top && playerCoordinates.top < playerAreaCoordinates.bottom) {
      var topCoordinates = true;
    }

    if (playerCoordinates.left > playerAreaCoordinates.left && playerCoordinates.left < playerAreaCoordinates.right) {
      var leftCoordinates = true;
    }

    if (topCoordinates && leftCoordinates === true) {
      areCoordinatesCorrect = true;
    } else {
      areCoordinatesCorrect = false;
    }
    return areCoordinatesCorrect;
  }

  // -----------------------End functions descriptions ----------------------------------------------------

}
})();