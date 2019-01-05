const express = require('express')

const app = express()

const router = require('./routes')

const PORT = process.env.PORT || 8080;

app.use('/api', router)

app.listen(PORT, () => {
    console.log('Server started on port 3000')
})