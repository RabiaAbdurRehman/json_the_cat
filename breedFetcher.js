const request = require("request");
const breedName = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
request(url, (error, Response, body) => {
    if (error) {
        console.log("Request is failed: ", error);
        return;
    }
    //console.log(body);
    //console.log(typeof body)
    const data = JSON.parse(body);
    if (data.length === 0) {
        console.log("Breed not found.");
        return;
    }
    console.log(data);
    //console.log(typeof data);
    //Access the first entry in the data array and print out the description for the user.
    const firstBreed = data[0];
    console.log(firstBreed.description);
});