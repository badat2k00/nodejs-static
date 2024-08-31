const express =require("express");
const app = express()
app.use(express.json())
const PORT=8080

const path = require('path')
app.use(express.static('public'))

app.post('sell',(req,res)=>{
    
})
app.get('/', (req, res) => {
        res.sendFile('index.html', {root: path.join(__dirname, 'public')});
    
  })
app.listen(PORT,()=>{
    console.log("Server listen in ",PORT);
})
// index.js
module.exports = app