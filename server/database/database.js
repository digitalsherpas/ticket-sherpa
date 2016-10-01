const Sequelize = require('sequelize');

const sequelize = new Sequelize(`postgres://${process.env.DATABASEUSER || 'postgres'}:${process.env.DATABASEPASSWORD || 'password'}@${process.env.DATABASEPORT || '10.8.22.204:5432'}/tickether`);

sequelize
  .authenticate()
  .then((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Connection has been established successfully.');
    }
  })
  .catch((err) => {
    console.log('Unable to connect to the database:', err);
  });

module.exports = sequelize;
