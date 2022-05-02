const express = require('express');
const {
    send
} = require('express/lib/response');

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send("OK");
})

app.listen(3000, () => {
    console.log("Corriendo en el puerto 3000")
})