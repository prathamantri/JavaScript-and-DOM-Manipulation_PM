// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// YOUR CODE HERE!
tableData.forEach(function(ufodata) {

  console.log(ufodata);
  var row = tbody.append("tr");
  Object.entries(ufodata).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the ufodata object
    var cell = row.append("td");
    cell.text(value);
  });
});

// Getting a reference to the button on the page with the id property set to `filter-btn`
var button = d3.select("#filter-btn");

button.on("click", function() {
  // Getting a reference to the input element on the page with the id property set to 'datetime' and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  //Print the input value to the console
  console.log(inputValue);

  //Compare this input value to the rows of existing table using filter
  usermatch = tableData.filter(ufosightings => ufosightings.datetime === inputValue);
  
  console.log(usermatch);
  resultantTable(usermatch);
});

  function resultantTable(result){
  
    d3.select("tbody").selectAll("tr").remove().selectAll("td").remove();
    Object.entries(result).forEach(function(record) {
     var row = tbody.append("tr");
      // Append a cell to the row for each value
      // in the weather report object
     Object.entries(record[1]).forEach(function(value) {
        var cell = row.append("td");
        cell.text(value[1]);
      }
    );
  });
}
  
// 
// resultantTable([["key", "value"]]);