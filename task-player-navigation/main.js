(function implementTheShootingGame() {

  setDefaultPlayerCoordinates();

  // The following function set the player for initial coordinates
  function setDefaultPlayerCoordinates() {
    document.getElementById('player').style.top = '50px';
    document.getElementById('player').style.left = '50px';  
  }

  // The following variable saves tha last player moving keycode 
  var lastKeyCode;

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

//-----------------------------------Working area-------------------------------------------------------------------


  if (e.keyCode === 32 || e.keyCode === 13) {
    createAndSetBullet($playerArea, playerCoordinates, lastKeyCode);  
 // var playerCoordinates = $player.getBoundingClientRect();
  }




// debugger
// var el = document.getElementsByClassName('bullet');
//   setInterval(function() {
//   // var bulletCoordinates = el[i].getBoundingClientRect();
//   el[0].style.left = (parseInt(el[0].style.left) + 10) + 'px';
//   if (parseInt(el[0].style.left) > 1500) {
//   $playerArea.removeChild(el[0]);
//   return false;
//   }
//   }, 20);

// var $bullet;
// for( var i = 0; i < 10; i++){
//   // $bullet.style.left = (parseInt($player.style.left) + 10) + 'px';
// bulletMoving($bullet);  
// }
// function bulletMoving(element) {
//   setTimeout(function() {
//   element.style.left = (parseInt($player.style.left) + 10) + 'px';  
//   }, 1000);
// }






// The followinf function creates bullet and sets it before the player
function createAndSetBullet(parentElement, playerCoordinates, lastKeyCode) {
  $bullet = document.createElement('div');
  $bullet.className = "bullet";
  if (lastKeyCode !== 38 && lastKeyCode !== 40) {
    $bullet.style.top = playerCoordinates.top + 8 + 'px';
    if (lastKeyCode === 37) {
      $bullet.style.left = playerCoordinates.left - 6 + 'px';
    }

    if (lastKeyCode === 39) {
      $bullet.style.left = playerCoordinates.left + 22 + 'px'; 
    }
  }

  if (lastKeyCode !== 37 && lastKeyCode !== 39) {
    $bullet.style.left = playerCoordinates.left + 8 + 'px';
    if(lastKeyCode === 38) {
      $bullet.style.top = playerCoordinates.top - 6 + 'px';
    }
    if(lastKeyCode === 40) {
      $bullet.style.top = playerCoordinates.top + 22 + 'px';
    }
  }

  parentElement.appendChild($bullet);
  setInterval(function() {
  var bulletCoordinates = $bullet.getBoundingClientRect();
  $bullet.style.left = (parseInt($bullet.style.left) + 10) + 'px';
  if (parseInt($bullet.style.left) > 500) {
  $playerArea.removeChild($bullet);

  }
  }, 20);

  return $bullet;
}

















//-----------------------------------Working area-------------------------------------------------------------------

    // ----------------------- Start functions descriptions --------------------------------------

    // The following function implements player's moving and asks the player to continue the game. 
    function playerMoving(areCoordinatesCorrect, isKeyCodeCorrect) {
      if (areCoordinatesCorrect === true) {
        var KEYCODE_LEFT = 37;
        var KEYCODE_RIGHT = 39;
        var KEYCODE_UP = 38;
        var KEYCODE_DOWN = 40;
        
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
          var wantPlayOneMore = confirm( ('Unfortunately you just have lost. Do you want to play one more ?') );
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
      lastKeyCode = keyCode;
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