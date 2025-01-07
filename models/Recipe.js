const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  mealId: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  ingredients: [{ name: String, quantity: String }],
  instructions: { type: String, required: true },
});

module.exports = mongoose.model('Recipe', recipeSchema);