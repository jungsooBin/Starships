const router = require('express').Router()
const {Review, User, Ship} = require('../db/models')
module.exports = router


//GET single ship reviews
router.get('/:id', async(req, res, next) =>{
  try{
    const review = await Review.findAll({
      where: {
        shipId: req.params.id
      }
    } )
    res.json(review);
  }catch(error){
    next(error) 
    console.log(error)
  }
});
