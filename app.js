var express = require('express');
var app = express();
const fs = require('fs');

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("api up and running");
})

app.post('/',(req,res)=>{
    var data = JSON.stringify(req.body)
    fs.writeFile(`${req.body.hostname}.text`,data,'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
        console.log("JSON file has been saved.");
    });
    console.log(req.body);
    res.send("done");
})

app.listen(80,()=>{
    console.log('listening on 80')
})