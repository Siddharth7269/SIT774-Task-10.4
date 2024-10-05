const {User,Message}=require('../models');

const getAllUsers = async (req, res) => {
    try {
      const users = await User.findAll();
      
      res.render('pages/socialise', { user: req.user, users });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  };
  const chatView = async (req, res) => {
    try {
      const chatUserId = req.params.userId; // User ID to chat with
      const chatUser = await User.findByPk(chatUserId);
      console.log(req.user.id,chatUser.id);
      if (!chatUser) {
        return res.status(404).send('User not found');
      }
      res.render('pages/chat', {
        user: req.user,
        chatUser,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
module.exports={getAllUsers,chatView};