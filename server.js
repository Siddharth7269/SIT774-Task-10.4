// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const chatSocket=require('./sockets/socket');
const baseRoutes = require('./routes/index');
const chatRoutes = require('./routes/chatRoutes');
const multer = require('multer');
const PORT=3000;
const { sequelize } = require('./models');
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(baseRoutes);
app.use(chatRoutes);

chatSocket(io);
sequelize.sync({ force: false }) // Synchronize models with database
  .then(() => {
    console.log('Database synchronized');
    server.listen(PORT,'0.0.0.0', () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

