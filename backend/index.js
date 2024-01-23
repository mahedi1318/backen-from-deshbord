const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const productCheckSchemas = require("./models/ProductSchema.js")

app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://javascript0552:V74cnvjY77qxXSc@cluster0.tiw0yyf.mongodb.net/product-stro?retryWrites=true&w=majority").then(()=>{
    console.log("Mongo Db CONNECTED ! ")
})


app.get("/", (req, res)=>{
    res.send("all right server !")
})

app.post("/products", (req, res)=>{
    let {productname, brandname, productDescreption, colorCase, productSize, number, price, discountPrice, totalPrice} = req.body
    // console.log(productname, brandname, productDescreption, colorCase, productSize, number, price, discountPrice, totalPrice)

    if(!productname){
        console.log("please your product name messing !")
        return res.send("please your product name messing !")
    }
    if(!brandname){
        return res.send("please your brand name messing !")
    }
    if(!productDescreption){
        return res.send("please your product Descreption messing !")
    }
    if(!colorCase){
        return res.send("please your color Case messing !")
    }
    if(!productSize){
        return res.send("please your product Size messing !")
    }
    if(!number){
        return res.send("please your number messing !")
    }
    if(!price){
        return res.send("please your price messing !")
    }    
    if(!totalPrice){
        return res.send("please your totalPrice messing !")
    }
    
    let createData = new productCheckSchemas({
        productname: productname,
        brandname: brandname,
        productDescreption: productDescreption,
        colorCase: colorCase,
        productSize: productSize,
        number: number,
        price: price,
        discountPrice: discountPrice,
        totalPrice: totalPrice
    })
    createData.save()
    res.send(req.body)
    console.log(req.body)
})

app.listen(8080, ()=>{
    console.log("server running")
})