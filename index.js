const express = require('express')
const mongoose = require('mongoose');
const app = express()
require('dotenv').config()
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())


async function main() {
  await mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@veggify-app.oqfjfma.mongodb.net/?retryWrites=true&w=majority&appName=Veggify-App`);

  const itemRoutes = require('./Src/Routes/ItemRoutes')

  app.use('/api', itemRoutes)

  app.get('/', (req, res) => {
    res.send('Veggify Recipe App Server')
  })
}

main().then(() => console.log('Mongobd Connected Successfully')).catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})