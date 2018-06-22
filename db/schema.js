const mongoose = require ('mongoose')

const Schema  = mongoose.Schema

const CreaturesSchema = new Schema({
    creatures: [SingleCreatureSchema]
})

const SingleCreatureSchema = new Schema({
    name: {
        type: String,
        default: "Creature Name"
    },
    description: {
        type: String,
        default: "What creatures are"
    }
})

const CreaturesModel = mongoose.model('Creatures', CreaturesSchema)
const SingleCreatureModel = mongoose.model('SingleCreature', SingleCreatureSchema)

module.exports = {
  CreaturesModel,
  SingleCreatureModel
};