const models = require('../models')

// Simple get request, no url parameters or body 
exports.getAllArticles = async (request, response, next) => {
    try{
        articles = await models.Articles.findAll({include:[{model:models.Authors}, {model:models.Categories}]})
        response.status(200).json(articles)
    } catch (e){
        next(e)
    }
}

// PATCH existing article, below is an example request
// {"title":"Blah",
//  "content": "uiwfeehq",
//  "published": false,
//  "publishedDate": "10/10/10",
//  "authorId": 2,
//  "categoryId":  1
// }

// in the url you need to pass the article id
exports.updateArticle = async (request, response, next) => {
    try{
        var {title, content, published, publishedDate, authorId, categoryId} = request.body
        article = await models.Articles.findOne({where: {id: request.params.articleId}})
        if (article){
            if (!authorId || !categoryId){
                response.status(400).json("Bad request, some body missing")
            } else {
                if (published === true){
                    article = await article.update({title: title, content: content, published: 't', publishedDate: publishedDate,
                                    categoryId: categoryId, authorId: authorId})
                    response.status(200).json(article)
                } else if (published === false){
                    article = await article.update({title: title, content: content, published: 'f', publishedDate: publishedDate,
                                    categoryId: categoryId, authorId: authorId})
                                    response.status(200).json(article)
                } else {
                    response.status(400).json("Bad request, body format wrong")
                }
            }
        } else {
            response.status(404).json('Article not found')
        }
    } catch(e) {
        next(e)
    }
}


// post new article, below is an example request body, what the endpoint does is pretty self explanatory

// {"title":"Blah",
//  "content": "uiwehq",
//  "published": false,
//  "publishedDate": "10/10/10"
// }

// for the url parameters you need to pass the author and category ids
exports.uploadArticle = async (request, response, next) => {
    try{
        var {title, content, published, publishedDate} = request.body
        console.log(request.body)
        author = await models.Authors.findOne({where: {id: request.params.authorId}})
        if (!author){
            response.status(404).json('Author not found. Did youpost this author?')
        }
        category = await models.Categories.findOne({where: {id: request.params.categoryId}})
        if (!category){
            response.status(404).json('Category not found. Did you post this catecory?')
        }
        if (!title || !content || !publishedDate){
            response.status(400).json("Bad request, required body missing")
        } else {
            if (published === true || published === false){
                if (published === true){
                    article = await models.Articles.create({title: title, content: content, published: 't',
                                                            publishedDate: publishedDate, authorId: request.params.authorId,
                                                            categoryId: request.params.categoryId})
                }
                else{
                    article = await models.Articles.create({title: title, content: content, published: 'f',
                                                            publishedDate: publishedDate, authorId: request.params.authorId,
                                                            categoryId: request.params.categoryId})                }
            } else {
                response.status(400).json("Bad request, required body missing")
            }
            response.status(200).json(article)
        }
    } catch (e){
        next(e)
    }
}