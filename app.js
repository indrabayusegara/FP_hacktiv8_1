const express = require("express"); 
const port = 3000; 
const app = express(); 
 
app.use(express.json()); 
 
app.listen(port, (req,res)=>{ 
    console.log("server berjalan di port 3000");
}); 