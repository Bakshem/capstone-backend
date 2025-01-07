const mongoose = require('mongoose');

const shoppingListSchema = new mongoose.Schema({
  ingredients: [{ name: String, quantity: String }],
});

module.exports = mongoose.model('ShoppingList', shoppingListSchema);