

const arr=[];

const express=require("express");

const app=express();

const cors=require("cors");
app.use(cors());

app.use(express.json());


app.get("/",(req,res)=>{
if(arr.length===0){
    res.send("Update The Information")

}else{

    res.send(arr)
}

})


app.post("/post",(req,res)=>{

    const {name,description}=req.body;

    if(name && description){

        arr.push({name,description})
        res.send("update successfully")
    }else{
        
        res.send("update error")
    }
   


})



app.listen(3000,()=>{
    console.log("http://localhost:3000/")
})

