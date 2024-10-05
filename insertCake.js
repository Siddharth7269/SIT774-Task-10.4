const { Cake, sequelize } = require('./models/index'); // Import sequelize and Cake from your models/index.js

const seedCakes = async () => {
  try {
    await sequelize.sync({ force: true }); // Use { force: true } to drop and recreate tables
    await Cake.bulkCreate([
      {
        name: 'Chocolate Cake',
        description: 'Rich and moist chocolate cake',
        price: 20.0,
        imageUrl: '/images/cake1.jpg'
      },
      {
        name: 'Vanilla Cake',
        description: 'Classic vanilla cake with a creamy frosting',
        price: 18.0,
        imageUrl: '/images/cake2.jpg'
      },
      {
        name: 'Red Velvet Cake',
        description: 'Decadent red velvet cake with cream cheese frosting',
        price: 22.0,
        imageUrl: '/images/cake3.jpg'
      },
            {
        name: 'Blacforest Cake',
        description: 'Decadent red velvet cake with cream cheese frosting',
        price: 22.0,
        imageUrl: '/images/cake4.jpg'
      },
       {
        name: 'Blueberry Cake',
        description: 'Decadent red velvet cake with cream cheese frosting',
        price: 22.0,
        imageUrl: '/images/cake5.jpg'
      },
       {
        name: 'Mango truffle Cake',
        description: 'Decadent red velvet cake with cream cheese frosting',
        price: 22.0,
        imageUrl: '/images/cake6.jpg'
      },
      {
        name: 'Strawberry truffle Cake',
        description: 'Decadent red velvet cake with cream cheese frosting',
        price: 22.0,
        imageUrl: '/images/cake7.jpg'
      },
       {
        name: 'Chocolate truffle Cake',
        description: 'Decadent red velvet cake with cream cheese frosting',
        price: 22.0,
        imageUrl: '/images/cake8.jpg'
      },
       {
        name: 'Raspberry Cake',
        description: 'Decadent red velvet cake with cream cheese frosting',
        price: 22.0,
        imageUrl: '/images/cake9.jpg'
      },
       {
        name: 'Truffle Cake',
        description: 'Decadent red velvet cake with cream cheese frosting',
        price: 22.0,
        imageUrl: '/images/cake10.jpg'
      },
       {
        name: 'Tuti Fruti Cake',
        description: 'Decadent red velvet cake with cream cheese frosting',
        price: 22.0,
        imageUrl: '/images/cake11.jpg'
      },
       {
        name: 'Raspberry Truffle Cake',
        description: 'Decadent red velvet cake with cream cheese frosting',
        price: 22.0,
        imageUrl: '/images/cake12.jpg'
      },
       {
        name: 'Carrot Cake',
        description: 'Decadent red velvet cake with cream cheese frosting',
        price: 22.0,
        imageUrl: '/images/cake13.jpg'
      },
       {
        name: 'Lemon Cake',
        description: 'Decadent red velvet cake with cream cheese frosting',
        price: 22.0,
        imageUrl: '/images/cake14.jpg'
      },
       {
        name: 'Coconut Cake',
        description: 'Decadent red velvet cake with cream cheese frosting',
        price: 22.0,
        imageUrl: '/images/cake15.jpg'
      },
       {
        name: 'Marble Cake',
        description: 'Decadent red velvet cake with cream cheese frosting',
        price: 22.0,
        imageUrl: '/images/cake16.jpg'
      },
       {
        name: 'German Chocolate Cake',
        description: 'Decadent red velvet cake with cream cheese frosting',
        price: 22.0,
        imageUrl: '/images/cake17.jpg'
      },
       {
        name: 'Pound Cake',
        description: 'Decadent red velvet cake with cream cheese frosting',
        price: 22.0,
        imageUrl: '/images/cake18.jpg'
      },
       {
        name: 'Funfetti Cake',
        description: 'Decadent red velvet cake with cream cheese frosting',
        price: 22.0,
        imageUrl: '/images/cake19.jpg'
      },
       {
        name: 'Banana Cake',
        description: 'Decadent red velvet cake with cream cheese frosting',
        price: 22.0,
        imageUrl: '/images/cake20.jpg'
      },
       {
        name: 'Oreo Cake',
        description: 'Decadent red velvet cake with cream cheese frosting',
        price: 22.0,
        imageUrl: '/images/cake21.jpg'
      },
       {
        name: 'Tiramisu Cake',
        description: 'Decadent red velvet cake with cream cheese frosting',
        price: 22.0,
        imageUrl: '/images/cake22.jpg'
      },
       {
        name: 'Pineapple Upside Down Cake',
        description: 'Decadent red velvet cake with cream cheese frosting',
        price: 22.0,
        imageUrl: '/images/cake23.jpg'
      },
       {
        name: 'Peanut Butter Cake',
        description: 'Decadent red velvet cake with cream cheese frosting',
        price: 22.0,
        imageUrl: '/images/cake24.jpg'
      },
       {
        name: 'Caramel Cake',
        description: 'Decadent red velvet cake with cream cheese frosting',
        price: 22.0,
        imageUrl: '/images/cake25.jpg'
      },
       {
        name: 'Apple Cake',
        description: 'Decadent red velvet cake with cream cheese frosting',
        price: 22.0,
        imageUrl: '/images/cake26.jpg'
      },
       {
        name: 'Matcha Green tea Cake',
        description: 'Decadent red velvet cake with cream cheese frosting',
        price: 22.0,
        imageUrl: '/images/cake27.jpg'
      },
       {
        name: 'Pumpkin Cake',
        description: 'Decadent red velvet cake with cream cheese frosting',
        price: 22.0,
        imageUrl: '/images/cake28.jpg'
      },
       {
        name: 'Almond Cake',
        description: 'Decadent red velvet cake with cream cheese frosting',
        price: 22.0,
        imageUrl: '/images/cake29.jpg'
      },
       {
        name: 'Spice Cake',
        description: 'Decadent red velvet cake with cream cheese frosting',
        price: 22.0,
        imageUrl: '/images/cake30.jpg'
      },
    ]);
    console.log('Cakes have been added to the database.');
  } catch (error) {
    console.error('Error seeding cakes:', error);
  } finally {
    await sequelize.close();
  }
};

seedCakes();