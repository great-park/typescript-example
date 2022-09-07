import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
const app = express(), port = 4000

app.use(bodyParser.urlencoded({extended:true}))
    .use(cors())

app.get('/', (req,res) => res.json({message:"hi"}))

app.listen(port, ()=>{
    console.log(`server is listening at ${port}`)
})