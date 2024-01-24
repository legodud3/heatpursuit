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

window.loadTemperature() =function() {
    let city = "atlanta";
    let date = "01/04/1984";
    
    let matchingData = window.dataset.find(function(row) {
        return row["time"].toLowerCase() === date.toLowerCase() && row[city];
    });
    
    if (matchingData) {
        document.getElementById("temperature").innerText = `Temperature in ${city} on ${date}: ${matchingData[city]}`;
    } else {
        document.getElementById("temperature").innerText = `No data found for ${city} on ${date}.`;
    }
}
