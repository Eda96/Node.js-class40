import { notStrictEqual } from 'assert';
import express from 'express';
const app = express ()

app.use (express.json())

app.get ('/' ,(req , res) => {

  res.end ('hello from backend to frontend')

})

app.post ('/weather' , (req , res)=>{
const city = req.body.cityName
res.json(city)
})


app.listen (8000 , () =>console.log('eda'))



