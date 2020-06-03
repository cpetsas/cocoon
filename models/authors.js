const Sequelize = require('sequelize')

module.exports = (sequelize) => {
    class Authors extends Sequelize.Model {}
    Authors.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        },
    }, {
        sequelize,
        modelName: 'authors'});
    return Authors 
}