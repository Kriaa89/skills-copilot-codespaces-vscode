// Create web server and listen on port 3000
// 1. Import express
const express = require('express');
// 2. Create an instance of express
const app = express();
// 3. Create a route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
// 4. Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});