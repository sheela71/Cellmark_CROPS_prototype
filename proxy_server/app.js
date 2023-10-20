const express = require('express')
const cors = require('cors')
const {loadUsers} = require('./user_model')
const app = express()

app.use(cors({
        origin: '*',
        methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}))

const port = 8000;
app.listen(port, ()=> (console.log(`server running on port: ${port}`)))

app.get('/', (request, response)=>{
        response.send("Welcome")
})

app.get('/users',(request, response)=>{
        response.send(loadUsers())
})