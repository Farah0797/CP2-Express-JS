const express=require("express")

require("dotenv").config()



const PORT=process.env.PORT || 7000

const app=express()

const path=require("path")

//css
app.use(express.static('public'))
app.use(express.static('image'))

//set view engine

app.set("view engine", "pug")
app.set("views", path.join(__dirname,"views"))

var home=require("./routes/home")
var service=require("./routes/service")


app.get("/", home.home)
app.get("/home", home.home)
app.get("/service", service.service)



app.listen(PORT, () => {
    console.log("Server running on Port " +process.env.PORT)
})