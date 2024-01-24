// script.js

var data;

// Fetch and parse data from CSV
Papa.parse('https://raw.githubusercontent.com/legodud3/heatpursuit/main/US_City_Temp_Data.csv', {
  download: true,
  header: true, 
  complete: function(results) {
    data = results.data;
    console.log("CSV Data Loaded: ", data);  // Logging
  }
})

function search() {
    console.log("Search function entered");  // Logging

    let city = document.getElementById("city").value.trim();
    console.log("City: ", city);  // Logging

    let year = document.getElementById("year").value.trim();
    console.log("Year: ", year);  // Logging

    let date = "01/" + document.getElementById("date").value.trim();
    console.log("Date: ", date);  // Logging

    let resultDiv = document.getElementById("result");

    // Clear previous result
    resultDiv.innerHTML = "";
  
    // Check if inputs are not empty
    if(!city || !year || !date) {
        resultDiv.innerHTML = "Error: All fields must be filled.";
        return; // Exit the function
    }

    console.log("Searching data...");  // Logging
  
    // Search for corresponding data
    for (let i = 0; i < data.length; i++) {
        let rowData = data[i];
        let rowDateItem = rowData["time"].split('/'); // Using "time" as this is what your CSV uses

        // Check year and date match
        if (rowDateItem[2] == year && rowDateItem[1] == date) {
            // If city exists in the current row, then display corresponding temperature
            if(rowData[city]) {
                let temperature = rowData[city]; // Assuming city name matches column name exactly
                console.log("Match found!", temperature); // Logging
                resultDiv.innerHTML = "Temperature: " + temperature + '°F';
                return; // Exit the function after displaying temperature
            } else {
                resultDiv.innerHTML = `Error: The city '${city}' was not found in the dataset for the entered date.`;
                return; // Exit the function
            }
        }
    }

    resultDiv.innerHTML = `Error: No data found for the entered date; make sure you've entered a correct month and last two digits of a year.`;
}