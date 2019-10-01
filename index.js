const express = require('express')
const app = express()
const port = 3000
const cors= require('cors')
app.use(cors())

app.get('/', (req, res) =>{
    res.json({
        title:'hello world',
        date:'today'
    })
})
app.get('/user',(req,res)=>{
    res.json({
        username:'nanitkatipunan',
        email:'nanit.katipunan@student.passerellesnumeriques.org',
        password:null   
    });
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))