const mongoose = require('mongoose');
const { Schema } = mongoose;

const MealSchema = new Schema({
  name: { type: String, required: true },
  shoppingList: { type: [String], default: [] },
});

const MealPlanSchema = new Schema({
  week: { type: String, required: true },
  meals: { type: [MealSchema], default: [] },
});

const MealPlan = mongoose.model('MealPlan', MealPlanSchema);

module.exports = MealPlan;