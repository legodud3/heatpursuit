window.onload = function() {
    // Parse CSV file
    Papa.parse('US_City_Temp_Data.csv', {
        download: true,
        header: true,
        complete: function(result, file) {
            console.log("CSV Data Loaded: ", result.data);
            // Date of the first row's record
            console.log("First row, first column data: ", result.data[0].time);
            // Display this 'time' data in the 'output' paragraph in the HTML
            document.getElementById("output").innerText = result.data[0].time;
        },
        error: function(err, file) {
            console.log("ERROR:", err, file);
        }
    });
};