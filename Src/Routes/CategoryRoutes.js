const express = require('express')
const { findOne, find } = require('../Model/ItemModel')
const item = require('../Model/ItemModel')
const router = express.Router()

router.get('/categories/:category', async(req, res) => {
    const category = req.params.category
    try{
        const items = await item.find({category: category})
        res.status(200).json(items)
    }catch(err){
        console.log(err.message);
    }
})

module.exports = router