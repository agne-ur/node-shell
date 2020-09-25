const request = require('request');

module.exports = (fileName, done) => {
    request(fileName, function (error, response, body) {
        if (error) {
            throw error;
        } else {
            done(body);
            // process.stdout.write(response);       
        }
        // console.error('error:', error); // Print the error if one occurred
        // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        // console.log('body:', body); // Print the HTML for the Google homepage.
    });
};

// module.exports = (fileName) => {
//     fs.readFile(fileName, (err, data) => {
//       if (err) throw err;
//       process.stdout.write(data);
//       process.stdout.write("\nprompt > ");
//       // console.log(data);
//     });
//   };