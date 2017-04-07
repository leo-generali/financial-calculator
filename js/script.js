/*
 * A handler function to prevent default submission and run our custom script.
 * @param {e} event the submit event triggered by the user
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
    var value = Number(elements[i].value);
    data[key] = value;
  }

  //Debug: console.log data
  data.arr = calculateInvestmentValues(data.balance, data.contribution, data.years, data.interest);
  console.log(data);
  e.preventDefault();
}

/**
 * Creates array of investment value 
 * @param {Number} a 
 * @param {Number} b
 * @return {Number} sum
 */

var calculateInvestmentValues = function(balance, contribution, years, interest) {
  var arr = [];
  var percentInterest = interest / 100;
  var initialBalance = balance * Math.pow(1 + percentInterest, i).toFixed(1)

  for(var i = 0; i < years + 1; i++) {
    console.log( "Year: " + i);
    console.log(balance);
    console.log( 1 + percentInterest );
    console.log(i);
    console.log(futureValueSeries(contribution, i, percentInterest));

    arr.push( 
      compoundInterestPrincipal(balance, i, percentInterest) +
      futureValueSeries(contribution, i, percentInterest)
    );
  }

  console.log(arr);
  return [arr];
}

var compoundInterestPrincipal = function (balance, year, interestRate) {
  return balance *  Math.pow(1 + interestRate, year);
}

var futureValueSeries = function (contribution, year, interestRate) {
  return contribution * ((Math.pow(1 + interestRate, year) - 1) / interestRate); 
}

var createYearLabels = function(years) {
  var currentYear = new Date().getFullYear();
  var arr = [];
  console.log(currentYear);
  for(var i = 0; i < years.length; i++) {
    arr.push(currentYear + i);
  }

  return arr;
}


var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [{
      label: 'apples',
      data: [12, 19, 3, 17, 6, 3, 7],
      backgroundColor: "rgba(153,255,51,0.4)"
    }, {
      label: 'oranges',
      data: [2, 29, 5, 5, 2, 3, 10],
      backgroundColor: "rgba(255,153,0,0.4)"
    }]
  }
});