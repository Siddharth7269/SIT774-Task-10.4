const {sequelize,User}=require('../models/index')
const Message = require('../models/Messages')(sequelize);

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('join', async ({ fromUserId, toUserId }) => {
      const room = [fromUserId, toUserId].sort().join('-');
      socket.join(room);
      const messages = await Message.findAll({
        where: {
          fromUserId: [fromUserId, toUserId],
          toUserId: [fromUserId, toUserId],
        },
        order: [['createdAt', 'ASC']],
      });
      socket.emit('load messages', messages);
      console.log(`User ${fromUserId} joined room: ${room}`);
    });
    socket.on('chat message', async ({ fromUserId, toUserId, message }) => {
      const senderName= await User.findByPk(fromUserId);
      message=String(senderName.username)+":"+message;
      const newMessage = await Message.create({
        fromUserId,
        toUserId,
        message,
      });
      const room = [fromUserId, toUserId].sort().join('-');
      io.to(room).emit('chat message', newMessage);
      console.log(`Message from ${fromUserId} to ${toUserId}: ${message}`);
    });
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
};
