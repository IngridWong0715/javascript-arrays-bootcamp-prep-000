var chocolateBars = new Array("snickers", "hundred grand", "kitkat", "skittles");

function addElementToBeginningOfArray(array, element){
 //var arrayOfElement = [element];
  //return arrayOfElement.concat(array);
  return [array.splice(0,0,element); 
};

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  return array.concat([element]);
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length-1);
}
