const router = require('express').Router()
const {User, Ship} = require('../db/models')
module.exports = router


//GET all ships
router.get('/', async(req, res, next) =>{
  try{
    const ships = await Ship.findAll()
    res.json(ships);
  }catch(error){
    next(error)
  }
})

//GET single ship
router.get('/:id', async(req, res, next) =>{
  try{
    const ship = await Ship.findById(req.params.id)
    res.json(ship);
  }catch(error){
    next(error)
  }
});
