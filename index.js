const Sequelize = require('sequelize');

// Connection Check with async and await
// const sequelize = async () => {
//     const connection = new Sequelize('sequelize_node', 'root', 'xxxx@123', {
//         dialect: 'mysql'
//     });

//     try {
//         await connection.authenticate();
//         console.info("Database Connection SUCCESS")
//     }catch(err) {
//         console.error("Database Connection FAILURE",err.msg)
//     }
// };

// module.exports = sequelize;

// Connection Check with Promises
const sequelize = new Sequelize('sequelize_node', 'root', 'xxxx@123', {
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.info("Database Connection SUCCESS")
}).catch((err) => {
    console.error("Database Connection FAILURE",err.msg)
});

module.exports = sequelize;