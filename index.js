//Config App
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//Set view engine
app.set('view engine', 'pug');
app.set('views', './views');

//Set static folder
app.use(express.static('views/public'));

app.get('/', (req, res) => {
    res.render('home/index');
});

app.get('/category', (req, res) => {
    res.render('home/category');
});

app.get('/detail', (req, res) => {
    res.render('home/detail');
});

app.get('/view', (req, res) => {
    res.render('home/view');
});

app.listen(port, () => {
    console.log('Server is running on port', port);
});