const models = require('../models')

exports.addACategory = async(request, response, next) => {
    try{
        var title = request.body.title
        if (!title){
            response.status(400).json('Bad request, category title is missing')
        } else {
            category = await models.Categories.create({title: title})
            response.status(200).json(category)
        }
    } catch (e) {
        next(e)
    }
}