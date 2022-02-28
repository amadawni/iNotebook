const connectToMongo = require('./db');
const express = require('express')
const app = express()
var cors = require('cors')

connectToMongo();
const port = 3000

//If you want to use req.body, then we need to use middleware function
app.use(express.json())
app.use(cors())

//Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/note', require('./routes/note'))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})