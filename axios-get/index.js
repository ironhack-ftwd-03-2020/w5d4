const getDataForCountry = countryName => {

    axios.get(`http://restcountries.eu/rest/v2/name/${countryName}`)
        .then(function (response) {
            // log country name
            // console.log('country name: ', response.data[0].name);
            const countryDetail = response.data[0];

            document.getElementById("country-name").innerText = countryDetail.name;

            document.getElementById("country-population").innerText =
                countryDetail.population;

            document
                .getElementById("country-flag")
                .setAttribute("src", countryDetail.flag);

            console.log(countryDetail);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
}

// getDataForCountry('germany');

document.querySelector('button').onclick = () => {
    const userInput = document.getElementById('name').value;
    getDataForCountry(userInput);
}



