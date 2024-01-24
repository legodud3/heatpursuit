// script.js

var data;

// Fetch and parse data from CSV
Papa.parse('https://YOUR-USERNAME.github.io/YOUR-REPO/YOUR-FILE.csv', {
  download: true,
  header: true, 
  complete: function(results) {
    data = results.data;
  }
})

function search() {
    let city = document.getElementById("city").value.trim();
    let year = document.getElementById("year").value.trim();
    let date = "01/" + document.getElementById("date").value.trim(); // As date is always the first January

    let resultDiv = document.getElementById("result");

    // Clear previous result
    resultDiv.innerHTML = "";
  
    // Check if inputs are not empty
    if(!city || !year || !date) {
        resultDiv.innerHTML = "Error: All fields must be filled.";
        return; // Exit the function
    }
  
    // Search for corresponding data
    for (let i = 0; i < data.length; i++) {
        let rowData = data[i];
        let rowDateItem = rowData["time"].split('/'); // Using "time" as this is what your CSV uses

        // Check year and date match
        if (rowDateItem[2] == year && rowDateItem[1] == date) {
            //If city exists in the current row, then display corresponding temperature
            if(rowData[city]) {
                let temperature = rowData[city]; // Assuming city name matches column name exactly
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