// script.js

var data;

// Fetch and parse data from CSV
Papa.parse('https://legodud3.github.io/heatpursuit/US_City_Temp_Data.csv', {
  download: true,
  header: true, 
  complete: function(results) {
    data = results.data;
  }
})

function search() {
    let city = document.getElementById("city").value;
    let year = document.getElementById("year").value;
    let date = "01/" + document.getElementById("time").value; // As date is always the first January

    let resultDiv = document.getElementById("result");

    // Clear previous result
    resultDiv.innerHTML = "";

    // Search for corresponding data
    for (let i = 0; i < data.length; i++) {
        let rowData = data[i];
        let rowDateItem = rowData["Date"].split('/'); // Assuming date column is named "Date"

        // Check year and date match
        if (rowDateItem[2] == year && rowDateItem[1] == date) {
            //If city exists in the current row, then display corresponding temperature
            if(rowData[city]) {
                let temperature = rowData[city]; // Assuming city name matches column name exactly
                resultDiv.innerHTML = "Temperature: " + temperature + '°F';
                break
            }
        }
    }

    if (resultDiv.innerHTML == "") {
        resultDiv.innerHTML = "No data found for parameters.";    
    }
}