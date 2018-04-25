// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const Sequelize = require('sequelize');
const sequelize = new Sequelize('', '', '', {
  host: 'localhost',
  dialect: 'sqlite',

  pool: {
    max: 5,
    min: 0,
    acquire: 300,
    idle: 100
  },

  // SQLite only
  storage: 'sqlite2.db',

  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});

const User = sequelize.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});

sequelize.sync()
  .then(() => User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });