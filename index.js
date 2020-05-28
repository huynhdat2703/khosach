//Config App
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//Set view engine
app.set('view engine', 'pug');
app.set('views', './views');

//Set static folder
app.use(express.static('views/public'));

//Set Home Router
const homeRoute = require('./routes/home.route');
app.use('/', homeRoute);

//Set Admin Router
const adminRoute = require('./routes/admin.route');
app.use('/admin', adminRoute);

app.listen(port, () => {
    console.log('Server is running on port', port);
});