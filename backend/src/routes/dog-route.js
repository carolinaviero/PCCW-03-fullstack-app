const express = require('express');
const router = express.Router();
const { addDog, getAllDogs, updateDog, deleteDog } = require('../controllers/dogs-controller');

router.get('/', getAllDogs);

router.post('/', addDog);

router.put('/:id', updateDog);

router.delete('/:id', deleteDog)

module.exports = router;