const express = require('express');
const app = express();

app.use(express.json());

const courses=[
   {id: 1, name: 'biology'},
   {id: 2, name: 'mathematics'},
   {id: 3, name: 'chemistry'}
]

// ROUTES
// get requests
app.get('/', (req,res) =>{
   res.send('We are on home page');
});

app.get('/api/courses', (req, res) =>{
   res.send(courses);
});

app.get('/api/courses/:id', (req, res) =>{
   const course = courses.find(c =>c.id === parseInt(req.params.id));
   if(!course) res.status(404).send('Course Not Found');
   res.send(course);
});

// post request

app.post('/api/courses', (req, res) =>{
   const course = {
      id: courses.length + 1,
      name: req.body.name,
   }
})

// port

// replacing the port ith an environment variable
const port = process.env.PORT || 3000
app.listen(port, () =>console.log(`Listening to port ${port}...`));