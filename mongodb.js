const mongoose = require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/logingk")
.then(()=>{
    console.log("connected");
})
.catch(()=>{
    console.log("failed");
})

const Loginschema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
});

const collection=new mongoose.model("Collection",Loginschema);

module.exports=collection;