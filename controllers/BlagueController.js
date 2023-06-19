// controllers/BlagueController.js

const Blague = require('../models/blague.js');
const blagues = require('../blagues.json');

class BlagueController {
  getAllBlagues() {
    return blagues;
  }

  getBlagueById(id) {
    return blagues.find((blague) => blague.id === id);
  }

  getRandomBlague() {
    return blagues[Math.floor(Math.random() * blagues.length)];
  }
}

module.exports = new BlagueController();
