// Parse CSV file
Papa.parse('US_City_Temp_Data.csv', {
    download: true,
    header: true,
    complete: function(result, file) {
        console.log("CSV Data Loaded: ", result.data);
        window.data = result.data;
    },
    error: function(err, file) {
        console.log("ERROR:", err, file);
    }
});

function searchCity() {
    var cityName = document.getElementById('city').value.trim();
    var month = document.getElementById('month').value.trim();
    var year = document.getElementById('year').value.trim();
    if (cityName && month && year) {  //Checking if all fields are filled
        // Concatenating to make the string of the format "mm/yyyy"
        var date = month + "/" + year;
        // Looking for the row that has the same date
        for (var i = 0; i < window.data.length; i++) {
            let row = window.data[i];
            if (row["time"].includes(date) && row[cityName]) {  // If city and date found
                document.getElementById('output').innerText = `City and Date found! Temperature: ${row[cityName]}`;
                return;
            }
        }
    }
    document.getElementById('output').innerText = 'City or Date not found.';
}