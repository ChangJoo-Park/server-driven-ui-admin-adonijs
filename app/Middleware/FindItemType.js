'use strict'
const ItemType = use('App/Models/ItemType')

class FindItemType {
  async handle({
    request,
    response,
    params: {
      id
    }
  }, next) {
    // call next to advance the request
    const itemType = await ItemType.find(id)

    if (!itemType) {
      return response.status(404).json({
        message: 'Item not found.',
        id
      })
    }

    request.body.itemType = itemType

    await next()
  }
}

module.exports = FindItemType
