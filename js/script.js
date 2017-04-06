/*
 * A handler function to prevent default submission and run our custom script.
 * @param  {Event} event the submit event triggered by the user
 * 
 */
var handleFormSubmit = function(e) {
  //Array of all inputs in form
  var elements = document.getElementById("form").elements;

  var data = {};

  console.log(elements);

  //Loop through all input forms and add to data object
  for(var i = 0; i < elements.length - 1; i++) {
    var key = elements[i].name;
    var value = Number(elements[i].value;
    data[key] = value;
  }

  //Debug: console.log data
  console.log(data);
  e.preventDefault()
}