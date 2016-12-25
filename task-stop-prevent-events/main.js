// The following function doesn't have stopPropagation() method 
var onClickWithoutStopPropagation = function (e) {
  var $el = e.target;
  this.style.backgroundColor = 'orange';
  $el.style.backgroundColor = 'yellow';
  $el.innerText = 'Target';
  alert('Click');
};

var boxesWithoutStopPropagation = document.querySelectorAll('div.withoutStopPropagation *');
addClickFunctions(boxesWithoutStopPropagation, onClickWithoutStopPropagation);

// The following function has stopPropagation() method 
var onClickWithStopPropagation = function (e) {
  e.stopPropagation();
  var $el = e.target;
  this.style.backgroundColor = 'orange';
  $el.style.backgroundColor = 'yellow';
  $el.innerText = 'Target';
  alert('Click');
};

var boxesWithStopPropagation = document.querySelectorAll('div.withStopPropagation *');
addClickFunctions(boxesWithStopPropagation, onClickWithStopPropagation);

// The following function has preventDefault() method 
var onClickWithPreventDefault = function (e) {
  e.preventDefault();
  e.stopPropagation();
  var $el = e.target;
  var elementStyles = getComputedStyle($el);
  var background = elementStyles.getPropertyValue('background');
  background = background.substring(0, 14);
  var color = $el.getAttribute('data-color');
  alert(color + ' ' + background);
};

var boxesWithPreventDefault = document.querySelectorAll('div.withpreventDefault *');
addContexMenuFunction(boxesWithPreventDefault, onClickWithPreventDefault);


// The following function get array with selected elements and add function for right click to each one 
function addContexMenuFunction(elementsArray, rightClikFunction) {
    for (var i = 0; i < elementsArray.length; i++) {
    elementsArray[i].oncontextmenu = rightClikFunction;
  }
}
// The following function get array with selected elements and add click function for each one
function addClickFunctions(elementsArray, clickFunction) {
  for (var i = 0; i < elementsArray.length; i++) {
    elementsArray[i].onclick = clickFunction;
  }
}
