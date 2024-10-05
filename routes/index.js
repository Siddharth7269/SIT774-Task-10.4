// routes/index.js
const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
const CakeController = require('../controllers/CakeController');
const auth = require('../middleware/auth');
const upload = require('../config/multerConfig');
// Auth routes
router.post('/auth/register',upload.single('profilePic'), AuthController.register);
router.post('/auth/login', AuthController.login);

// Cake routes
router.post('/favorite', auth.authenticate, CakeController.addFavorite);
router.post('/favorite/remove',auth.authenticate, CakeController.removeFromFavorite);

// View routes
router.get('/',auth.authenticate, (req, res) => {
  console.log(req.user);
  
  res.render('pages/home',{user:req.user});
});
router.get('/about',auth.authenticate, (req, res) => res.render('pages/about',{user:req.user}));
router.get('/register',auth.deauth, (req, res) => res.render('auth/register',{user:req.user}));
router.get('/login', (req, res) => res.render('auth/login',{user:req.user}));
router.get('/logout',auth.deauth,(req,res)=>{res.render('pages/home',{user:req.user})});
router.get('/cakes',auth.authenticate, async (req, res) => {
  const cakes = await CakeController.getCakes(req, res);
  if(!req.user){
    res.render('cakes/cakes',{cakes,user:req.user});
  }
  else{
    let likedCakes=await CakeController.getFavoriteCakes(req,res);
    likedCakes=likedCakes.map(x=>x.id);
    res.render('cakes/cakes', { cakes, user: req.user,likedCakes });
  }

});

router.get('/cakes/favorites', auth.authenticate, async (req, res) => {
  const favoriteCakes = await CakeController.getFavoriteCakes(req, res);

  res.render('cakes/favorites', {user: req.user, favoriteCakes });
});
router.get('/profile',auth.authenticate,(req,res)=>{
  res.render('user/profile',{user:req.user});
});

module.exports = router;
