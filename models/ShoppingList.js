const mongoose = require('mongoose');

const shoppingListSchema = new mongoose.Schema({
  recipeId: { type: String, required: true }, // Add recipeId
  recipeName: { type: String, required: true }, // Add recipeName
  ingredients: [
    {
      name: { type: String, required: true },
      quantity: { type: String, default: '1' },
    },
  ],
});

module.exports = mongoose.model('ShoppingList', shoppingListSchema);