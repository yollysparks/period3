const express = require('express')
const app = express()
const gameArea =require("./gameData").gameArea.geometry;
const players = require("./gameData").gameArea.players;
app.get('/', (req, res) => res.send('Geo Demo!'))
app.get("/geoapi/isuserinarea/:lon/:lat",(req,res)=>{})
app.listen(3000, () => console.log('Example app listening on port 3000!'))
