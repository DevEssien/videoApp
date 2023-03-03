const axios = require("axios");

// const options = {
//     method: "GET",
//     url: "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup",
//     params: { term: "bojack", country: "uk" },
//     headers: {
//         "X-RapidAPI-Key": "5dc77aa325msh1a26fb5b00c57a8p14145cjsncc9dad5b5e27",
//         "X-RapidAPI-Host":
//             "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
//     },
// };

// axios
//     .request(options)
//     .then(function (response) {
//         console.log(JSON.stringify(response.data, null, 2));
//     })
//     .catch(function (error) {
//         console.error(error);
//     });

async function getResponse() {
    const url =
        "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup";
    // const response = await axios.get(url, {
    //     method: "GET",
    //     headers: {
    //         "x-rapidapi-host":
    //             "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
    //         "x-rapidapi-key":
    //             "5dc77aa325msh1a26fb5b00c57a8p14145cjsncc9dad5b5e27",
    //     },
    // });
    const response = await axios.get(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
}
getResponse();
