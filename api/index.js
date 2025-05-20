// /api/index.js
const app = require('../src/app'); // import your Express app
const serverless = require('serverless-http'); // convert Express to serverless

module.exports = serverless(app); // export as serverless function
