const User = require('../models/user_model');
const sequelize = require('../index');
const { Op } = require('sequelize')
const createUser = async () => {
    return await User.create({
        name: "Mallikarjuna",
        userName: "Malli",
        passWord: "mmmmm@123",
        age: 24
    })
};

const bulkUserCreate = async () => {
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
};

const ageIncrement = async () => {
    const age = await User.create({
        name: "KArthik",
        age: 5
    });
    age.name = 'Nandu';
    return await age.save()
};

const findAllUsers = async () => {
    // const data =  await User.findAll();
    // const data = await User.findAll({ limit : 2})
    // const data = await User.findAll({ attributes: ['name','passWord']}) // findout with name and passWord only
    // const data = await User.findAll({ attributes: [['name','myName'],['passWord','pwd']]});  //findout change the column name and display
    // const data = await User.findAll({ attributes: { exclude: 'name'}}) // Not Display Name
    // Aggregation Queries
    // const data = await User.findAll({ where: { userName: "Malli"} }) // Display userName = Malli Data only
    // const data = await User.findAll({ attributes: ['userName'], where: { userName: 'Malli'}})
    // const data = await User.findAll({ where: { name: 'Mallikarjuna', userName : 'Malli'}})
    // const data = await User.findAll({ attributes: [[sequelize.fn('SUM', sequelize.col('age')),'HOW']], where: { name: 'KArthik'}})
    // const data = await User.findAll({ where: { name: 'KArthik'}, attributes: [[sequelize.fn('SUM', sequelize.col('age')), 'howOLd']]}) // All Karthik Name's Age SUM 
    // const data = await User.findAll({ attributes: [[sequelize.fn('SUM', sequelize.col('age')), 'HOWOLD']]}) // findout All Ages with SUM
    // Order by using Sorting Data as DESCENDING and ASCENDING
    // const data = await User.findAll({ order: [['age', 'DESC']]})
    // const data = await User.findAll({ order : [['age','ASC']], limit: 3})
    // Group Queries
    // const data = await User.findAll({attributes: ['name'[sequelize.fn('SUM', sequelize.col('age')), 'sum_age']],group: 'name'})
    // Oprators
    // const data = await User.findAll({ where: {[Op.or] : { name: 'Mallikarjuna', age: '24'} }})
    // const data = await User.findAll({ where: { age: { [Op.gte] : 24 }}})
    // const data = await User.findAll({ where: {age: { [Op.or]: { [Op.lt] : 40, [Op.eq]: null}}}})
    // const data = await User.findAll({ where: sequelize.where(sequelize.fn('char_length', sequelize.col('name')), 6)})
    // const data = await User.sum('age')
    const data = await User.sum('age', { where: { age: 5 } })
    console.log("data..", data)
    // data.forEach((ele) => {
    //     console.log(ele.toJSON())
    // });  
}

const finderMethod = async () => {
    // const data = await User.findByPk(1,{raw:true})
    // const data = await User.findOne({raw:true})
    // const data = await User.findOne({
    //     where: {
    //         age: {
    //             [Op.or]: {
    //                 [Op.lt]: 6,
    //                 [Op.eq]: null
    //             }
    //         }
    //     },
    //     raw: true
    // })
    // const data = await User.findOrCreate({ where: {name: 'Gowtham'},raw:true})
    // const data = await User.findOrCreate({where: {name: 'S',isActive:true}})
    // const [result, created ] = data; // here we wil console created(true/false) or result....
    // console.log("data...", created)
    // console.log("data...",result)
    const data = await User.findAndCountAll({
        where: { userName: 'Malli'},
        raw: true // gives JSON type
    })
    const { count, rows} = data;
    console.log("count...",count)
    console.log("rows...",rows)
    // return data
}

const updateUser = async () => {
    // const data = await User.update({userName : 'Kannayya'}, {where: { name:'Siva'}})
    const data = await User.update({ passWord: 'KARTHIK' }, { where: { age: { [Op.gt]: 5 } } })
    return data;
}

const deleteUser = async () => {
    const data = await User.destroy({ where: { name: 'Nandu' } })
    return data
}
// bulkUserCreate();
// ageIncrement()
// createUser(); 
// findAllUsers()
finderMethod()
// updateUser()
// deleteUser()

