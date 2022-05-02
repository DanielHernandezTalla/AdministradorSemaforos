const express = require('express');
const {
    send
} = require('express/lib/response');

const app = express();

app.set('port', process.env.PORT || 3000)

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send("OK");
})

app.listen(app.get('port'), () => {
    console.log("Corriendo en el puerto 3000")
})