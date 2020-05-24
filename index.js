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

app.listen(port, () => {
    console.log('Server is running on port', port);
});