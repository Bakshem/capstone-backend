const express = require('express');
const router = express.Router();
const ShoppingList = require('../models/ShoppingList');

// Create a shopping list
router.post('/', async (req, res) => {
  const { recipeId, recipeName, shoppingList } = req.body;
  if (!recipeId || !recipeName || !shoppingList || !Array.isArray(shoppingList)) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  try {
    const shoppingListData = new ShoppingList({
      recipeId,
      recipeName,
      ingredients: shoppingList.map(item => ({
        name: item.name,
        quantity: item.quantity || '1',
      })),
    });

    const savedList = await shoppingListData.save();
    res.status(201).json(savedList);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get shopping list
router.get('/', async (req, res) => {
  try {
    const shoppingList = await ShoppingList.findOne();
    res.json(shoppingList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update shopping list
router.put('/:id', async (req, res) => {
  try {
    const updatedList = await ShoppingList.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedList);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;