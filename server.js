const PORT = 8000
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const axios =  require('axios')
const app = express()

const url = process.env.URL
const token = process.env.TOKEN

app.use(cors())
app.use(express.json())

app.post('/tickets',async (req,res)=>{
    const formData = req.body.formData;
    const options = {
        method:'POST',
        headers:{
            Accepts:"application/json",
            'X-Cassandra-Token':token,
            'Content-type':'application/json'
        },
        data:formData
    }
    try {
        const resp = await axios(url,options)
        res.status(200).json(resp.data)
    } catch (err) {
        console.log(err.message);
    }
})

app.get('/tickets',async (req,res)=>{
    const options = {
        method:'GET',
        headers:{
            Accepts:"application/json",
            'X-Cassandra-Token':token
        }
    }
    try {
        const resp = await axios(`${url}?page-size=20`,options)
        res.status(200).json(resp.data)
    } catch (err) {
        console.log(err.message);
    }
    
})

app.get('/tickets/:documentId',async (req,res)=>{
    const id = req.params.documentId;

    const options = {
        method:"GET",
        headers:{
            Accepts:"application/json",
            'X-Cassandra-Token':token
        },
    }
    try {
        const resp = await axios(`${url}/${id}`,options)
        res.status(200).json(resp.data)
    } catch (err) {
        console.log(err.message);
        
    }
})
app.put('/tickets/:documentId',async (req,res)=>{
    const id = req.params.documentId;
    const data=  req.body.data;

    const options = {
        method:"PUT",
        headers:{
            Accepts:"application/json",
            'X-Cassandra-Token':token
        },
        data
    }
    try {
        const resp = await axios(`${url}/${id}`,options)
        res.status(200).json(resp.data)
    } catch (err) {
        console.log(err.message);
        
    }
})

app.delete('/tickets/:documentId',async (req,res)=>{
    const id = req.params.documentId;
    const options = {
        method:'DELETE',
        headers:{
            Accepts:'application/json',
            'X-Cassandra-Token':token
        }
    }
    try {
        const resp = await axios(`${url}/${id}`,options)
        res.status(200).json(resp.data)
    } catch (err) {
        console.log(err.message);
        
    }
})

app.listen(PORT,()=>{
    console.log("Server started on ",PORT);
})