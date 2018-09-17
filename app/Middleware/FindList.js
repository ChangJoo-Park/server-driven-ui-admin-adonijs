'use strict'
const List = use('App/Models/List')

class FindList {
  async handle({
    request,
    response,
    params: {
      id
    }
  }, next) {
    // call next to advance the request
    const list = await List.find(id)

    if (!list) {
      return response.status(404).json({
        message: 'List not found.',
        id
      })
    }

    request.body.list = list

    await next()
  }
}

module.exports = FindList
