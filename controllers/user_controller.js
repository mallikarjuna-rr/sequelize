const User = require('../models/user_model');


const createUser = async() => {
    return await User.create({
        name: "Mallikarjuna",
        userName: "Malli",
        passWord: "mmmmm@123",
        age: 24
    })
};

const bulkUserCreate = async() => {
    return await User.bulkCreate([
        {
            name: "Vishnu",
            age: 26
        },
        {
            name: "Siva",
            age: "28"

        }
    ])
}
bulkUserCreate();
// createUser();