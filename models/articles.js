const Sequelize = require('sequelize')

module.exports = (sequelize) => {
    class Articles extends Sequelize.Model {}
    Articles.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: Sequelize.STRING
        },
        content: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN,
            defaultValue: 't',
        },
        publishedDate: {
            type: Sequelize.STRING
        }
    }, {
        sequelize,
        modelName: 'articles'});
    return Articles 
}