const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI || "mongodb://localhost/rideblog";

mongoose.connect(connectionString, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log("connected to mongo at: " + connectionString);
    });

module.exports = mongoose