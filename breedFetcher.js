const request = require("request");
// const breedName = process.argv[2];
//const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
const fetchBreedDescription = (breedName, callback) => {
    const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

    request(url, (error, Response, body) => {
        //callback(error, body)
        if (!error) {
            const data = JSON.parse(body);
            if (data.length === 0) {
                // console.log("Breed not found.");
                callback("breed is not found.");//when error is passed we just need one parameter.
                return;
            }
            console.log(data);
            //console.log(typeof data);
            //Access the first entry in the data array and print out the description for the user.
            const firstBreed = data[0];
            // console.log(firstBreed.description);
            callback(null, firstBreed.description);

        } else {
            callback(error);
        }
    });

};
//fetchBreedDescription(breedName);
module.exports = { fetchBreedDescription };