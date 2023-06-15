const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const db = require('./config/mongoose')
const { loginUser } = require('./controller/user')

app.use(express.json())
app.use(express.urlencoded( {extended : true} ))

app.set('view engine' , 'ejs')
app.set('views' , path.join(__dirname , 'view'))

app.get('/' , (req , res)=>{
    res.render('homepage' , {message : ""})
})
app.post('/' , loginUser)

app.use('/user' , require('./routes/user'))
// app.use('/blogs' , )

app.listen(port , ()=>{
    console.log("running on" + port )
})