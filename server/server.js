// This file is run with Node
const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// Serve index.html for all unmatched routes (*)
// Second argument processes all unhandled requests
// req contains info about the request, 
// res lets you manipulate the response your express server makes to the requester
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html')); // Send index.html for all requests
});

app.listen(port, () => {
  console.log('Server is running on port 3000');
});
