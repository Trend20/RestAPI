const express = require('express');
const app = express();

// ROUTES
app.get('/', (req,res) =>{
   res.send('We are on home page');
});

app.get('/api/courses', (req, res) =>{
   res.send(['biology', 'history', 'mathematics']);
});

// port

// replacing the port ith an environment variable
const port = process.env.PORT || 3000
app.listen(port, () =>console.log(`Listening to port ${port}...`));