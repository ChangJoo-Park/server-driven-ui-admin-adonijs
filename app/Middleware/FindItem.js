'use strict'
const Item = use('App/Models/Item')

class FindItem {
  async handle({
    request,
    response,
    params: {
      id
    }
  }, next) {
    // call next to advance the request
    const item = await Item.find(id)

    if (!item) {
      return response.status(404).json({
        message: 'Item not found.',
        id
      })
    }

    request.body.item = item

    await next()
  }
}

module.exports = FindItem
