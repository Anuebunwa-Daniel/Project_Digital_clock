require('dotenv').config()
const ejs = require('ejs')

const express =require('express')

const app = express()

app.set('view engine', 'ejs')
app.use('/assets', express.static('assets'))
app.use(express.urlencoded ({extended:true}))

app.get('/', (req, res)=>{
    res.render('clock')
})





const port = process.env.PORT || 9000

app.listen(port, ()=>{
    console.log('listening to port 9000')
})