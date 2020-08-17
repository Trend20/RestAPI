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
app.listen(3000, () =>console.log('Listening to port 3000...'));