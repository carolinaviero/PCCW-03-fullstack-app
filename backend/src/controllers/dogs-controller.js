const Dog = require('../models/Dog');

const getAllDogs = (req, res) => {
   Dog.find({})
    .then((dogs) => res.send(dogs))
    .catch((err) => res.send(err))
};

const addDog = (req, res) => {
    const dog = new Dog(req.body);
    dog
        .save()
        .then(dog => res.send(dog))
        .catch(err => res.send(err))
}

const updateDog = (req, res) => {
    Dog.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dog => res.send(dog))
        .catch(err => res.send(err))
}

const deleteDog = (req, res) => {
    Dog.deleteOne({ _id: req.params.id })
        .then(() => console.log("Dog deleted!"))
        .catch(err => res.send(err))
}

module.exports = { addDog, getAllDogs, updateDog, deleteDog };