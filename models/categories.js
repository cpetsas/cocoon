const Sequelize = require('sequelize')

module.exports = (sequelize) => {
    class Categories extends Sequelize.Model {}
    Categories.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: Sequelize.STRING
        }
    }, {
        sequelize,
        modelName: 'categories'});
    return Categories 
}