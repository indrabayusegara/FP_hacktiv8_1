if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const express = require("express");
const router = require("./routes/routes");
const port = 3000;
const app = express();

app.use(express.json());
app.use(router);

app.get('/', () => {

});

app.listen(port, (req, res) => {
    console.log("server berjalan di port 3000");
}); 