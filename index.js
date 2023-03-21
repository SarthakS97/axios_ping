const axios = require('axios');

// Replace "https://example.com" with the URL of the webpage you want to visit
const url = "https://solforms.onrender.com";

// Visit the webpage every 5 minutes
setInterval(function() {
  axios.get(url)
    .then(response => console.log(response.data))
    .catch(error => console.error(error));
}, 840000); // 15 minutes in milliseconds
