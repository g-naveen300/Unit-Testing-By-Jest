import express from "express";
import sum from "./sum"

const app = express();
const port = 8080;

app.listen(port,(req,res) =>{
    console.log(`server is listening on port ${port}`)
});

app.get("/home",async(req,res)=> {
    res.json({
        msg:"I am root"
    });
});


app.get("/getSum/:a/:b",async(req,res)=>{
    const {a,b}= req.params; //when we are extracting from params it is string  so we write parse

    res.json({
        ans:sum(parseInt(a),parseInt(b))
    })
})