const sequelize = require('../index');
const { DataTypes, Model } = require('sequelize');


const User = sequelize.define('user', {
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userName: {
        type: DataTypes.STRING,
        unique: true
    },
    passWord: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    timestamps: false,
    validate: {
        usernamePassMatch() {
            if(this.userName === this.passWord) {
                throw new Error("Password cannot be match with usrname")
            } else {
                console.log("OK")
            }
        }
    }
});

User.sync({alter: true }).then(() => {
    console.log("Table Created")
}).catch((err) => {
    console.log("Table not Created")
});

module.exports = User;
