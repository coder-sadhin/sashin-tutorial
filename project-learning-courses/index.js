const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json')
const blogs = require('./data/blogs.json')

app.get('/', (req, res) => {
    res.send('courses api is running')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const selectedCourse = courses.find(c => c.id === id);
    res.send(selectedCourse)
})

app.get('/blogs', (req, res) => {
    res.send(blogs)
})

app.listen(port, () => {
    console.log('news server is running', port);
})


module.exports = app;
