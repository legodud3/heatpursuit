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
    var cityName = document.getElementById('city').value.trim();  // trim() is used to remove white spaces at the beginning and the end
    if (window.data[0][cityName]) {  // If city found in the first row of CSV
        document.getElementById('output').innerText = `City found! Temperature on 01/01/48: ${window.data[0][cityName]}`;
    } else {
        document.getElementById('output').innerText = 'City not found.';
    }
}