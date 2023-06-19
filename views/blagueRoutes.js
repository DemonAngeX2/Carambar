// views/blagueRoutes.js

const express = require('express');
const router = express.Router();
const blagueController = require('../controllers/BlagueController');

router.get('/hasard', (req, res) => {
  const blague = blagueController.getRandomBlague();
  res.json(blague);
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const blague = blagueController.getBlagueById(id);
  if (blague) {
    res.json(blague);
  } else {
    res.status(404).json({ message: 'Blague non trouvée' });
  }
});

router.get('/', (req, res) => {
  const blagues = blagueController.getAllBlagues();
  res.json(blagues);
});

module.exports = router;