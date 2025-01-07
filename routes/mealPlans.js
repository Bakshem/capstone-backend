const express = require('express');
const router = express.Router();
const MealPlan = require('../models/MealPlan');

// Create a meal plan
router.post('/', async (req, res) => {
  const { week, meals } = req.body;

  try {
    const newMealPlan = new MealPlan({ week, meals });
    await newMealPlan.save();
    res.status(201).json(newMealPlan);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all meal plans
router.get('/', async (req, res) => {
  try {
    const mealPlans = await MealPlan.find().populate('meals');
    res.json(mealPlans);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch meal plans.' });
  }
});

// Update a meal plan
router.put('/:id', async (req, res) => {
  try {
    const updatedMealPlan = await MealPlan.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedMealPlan);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a meal plan
router.delete('/:id', async (req, res) => {
  try {
    await MealPlan.findByIdAndDelete(req.params.id);
    res.json({ message: 'Meal Plan deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/api/meal-plans', (req, res) => {
  console.log('Request Body:', req.body); // Log the incoming data
  res.send('Debugging: Request body logged');
});

router.delete('/', async (req, res) => {
  try {
    await MealPlan.deleteMany();
    res.status(200).json({ message: 'All meal plans cleared successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to clear meal plans.', error });
  }
});

module.exports = router;