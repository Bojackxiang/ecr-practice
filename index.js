const express = require('express')

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World 第6次");
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});