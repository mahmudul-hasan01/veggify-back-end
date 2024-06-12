const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
    name: String,
    quantity: String
})
const commentSchema = new mongoose.Schema({
    user: String,
    comment: String
})
const moreSchema = new mongoose.Schema({
    prep_time: String,
    cook_time: String,
    servings: Number,
    difficulty: String,
    source: String,
})

const ItemSchema = new mongoose.Schema({
    menuId: Number,
    name: String,
    thumbnail_image: String,
    category: String,
    instructions: String,
    tags: [String],
    ingredients: {
        type: [ingredientSchema]
    },
    comments: {
        type: [commentSchema]
    },
    more: {
        type: moreSchema
    },
});

const item = mongoose.model("Items", ItemSchema)
module.exports = item