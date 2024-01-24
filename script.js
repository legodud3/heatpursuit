window.onload = function() {
    // Parse local CSV file
    Papa.parse('US_City_Temp_Data.csv', {
        download: true,
        header: true,
        complete: function(result, file) {
            console.log("CSV Data Loaded: ", result.data);
        },
        error: function(err, file) {
            console.log("ERROR:", err, file);
        }
    });
};