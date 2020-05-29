const mongoose = require('mongoose');
const URL = "mongodb+srv://admin:kid123456789@khosach-wbve6.mongodb.net/QuanLyKhoSach?retryWrites=true&w=majority";
const option = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(URL, option, (err) => {
    if (err)
        console.log("Error is:", err);
});

module.exports = mongoose;
