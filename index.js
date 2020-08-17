const express = require('express');
const app = express();

const courses=[
   {id: 1, name: 'biology'},
   {id: 2, name: 'mathematics'},
   {id: 3, name: 'chemistry'}
]

// ROUTES
app.get('/', (req,res) =>{
   res.send('We are on home page');
});

app.get('/api/courses', (req, res) =>{
   res.send(courses);
});

app.get('/api/courses/:id', (req, res) =>{
   
});

// port

// replacing the port ith an environment variable
const port = process.env.PORT || 3000
app.listen(port, () =>console.log(`Listening to port ${port}...`));