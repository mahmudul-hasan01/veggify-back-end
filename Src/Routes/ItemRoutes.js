const express = require('express')
const item = require('../Model/ItemModel')
const router = express.Router()

router.get('/all-items', async (req, res) => {
  const result = await item.find().sort({ createAt: - 1 })
  res.status(200).json(result)
})

router.get('/items', async (req, res) => {
  try {
    const search = req.query.search;
    const regex = new RegExp(search, 'i');
    const result = await item.find({ name: regex });
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
})

router.get('/item/:id', async (req, res) => {
  const data = await item.findById(req.params.id)
  res.json(data)
})

module.exports = router