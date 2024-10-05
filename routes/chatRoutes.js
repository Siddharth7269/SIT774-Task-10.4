const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const AuthController = require('../controllers/AuthController');
const ChatController = require('../controllers/ChatController');
router.get('/socialise',auth.authenticate,ChatController.getAllUsers);
router.get('/chat/:userId',auth.authenticate,ChatController.chatView);




module.exports=router;