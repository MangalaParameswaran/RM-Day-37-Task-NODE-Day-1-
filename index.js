import express from 'express'
import fs from 'fs'
import { format } from 'date-fns';




const PORT=8002;
let app=express()
app.use(express.json())
app.get('/',(req,res)=>{
    let today=format(new Date(),'dd_MM_yyyy-HH-mm-ss')
    const filePath = `TimeStamp/${today}.txt`;
    fs.writeFileSync(filePath,`${today}`,'utf8')
    let data=fs.readFileSync(filePath,'utf8')
    try {
        res.status(200).send({
            data,
            message:'Data Fetch Successfully'
        })
        
    } catch (error) {
        req.res(500).send({
            message:'Internel server error'
        })
        
    }
})




app.listen(PORT,()=>console.log(`App is Listening to ${PORT}`))