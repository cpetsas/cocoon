const models = require('../models')

// example request body
// {"name": "someone"}
exports.addAuthor = async(request, response, next) => {
    try{
        var name = request.body.name
        if (!name){
            response.status(400).json('Bad request, name is missing')
        } else {
            author = await models.Authors.create({name: name})
            response.status(200).json(author)
        }
    } catch (e) {
        next(e)
    }
}