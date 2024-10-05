// controllers/CakeController.js
const { Cake, User, UserCake } = require('../models');

const addFavorite = async (req, res) => {
  console.log("The request body is shown as");
  console.log(req.body);
  const { cakeId } = req.body;
  const userId = req.user.id; 
  try {
    await UserCake.create({ UserId: userId, CakeId: cakeId });
    res.json({ message: 'Cake added to favorites' });
  } catch (error) {
    res.status(500).json({ error: 'Error adding cake to favorites' });
  }
};

const removeFromFavorite = async (req, res) => {
  console.log("The request body is shown as");
  console.log(req.body);
  const { cakeId } = req.body;
  const userId = req.user.id;

  try {
    const result = await UserCake.destroy({
      where: {
        UserId: userId,
        CakeId: cakeId
      }
    });

    if (result) {
      res.json({ message: 'Cake removed from favorites' });
    } else {
      res.status(404).json({ error: 'Favorite cake not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error removing cake from favorites' });
  }
};



const getCakes = async (req, res) => {
  try {
    const cakes = await Cake.findAll();
    return cakes;
  } catch (error) {
    res.status(500).json({ error: 'Error fetching cakes' });
  }
};

const getFavoriteCakes = async (req, res) => {

  const userId = req.user.id;

  try {
    const favoriteCakes = await UserCake.findAll({
      where: { UserId: userId },
    });
    const cakes = favoriteCakes.map(x=>x.CakeId);
    const retCakes = await Cake.findAll({
      where: {
        id: cakes
      }
    });
    return retCakes;
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching favorite cakes' });
  }
};


module.exports = { addFavorite, getCakes, getFavoriteCakes,removeFromFavorite };
