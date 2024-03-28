// Create empty arrays to store names and ages
let names = [];
let ages = [];

// Loop through each object in the JSON data
jsonData.forEach(function(person) {
  // Extract name and age from the current object
  const name = person.Name;
  const age = person.Age;

  // Push names and ages to their respective arrays
  names.push(name);
  ages.push(age);
});


let trace1 = {
    x: names,
    y: ages,
    type: 'bar'
  };
  
  let data = [trace1];
  
  let layout = {
    title: "A Plotly plot"
  };
  
  Plotly.newPlot("plot", data, layout);