'use strict'
const Item = use('App/Models/Item')
const ItemType = use('App/Models/ItemType')
/**
 * Resourceful controller for interacting with items
 */
class ItemController {
  /**
   * Show a list of all items.
   * GET items
   */
  async index({
    request,
    response
  }) {
    const items = await Item.all()
    return items
  }

  /**
   * Create/save a new item.
   * POST items
   */
  async store({
    request,
    response
  }) {}

  /**
   * Display a single item.
   * GET items/:id
   */
  async show({
    params,
    request,
    response
  }) {
    const {
      item
    } = request.post()

    item.type = await item.type().fetch()

    response.status(200).json({
      message: 'Here is your Item',
      data: item
    })
  }

  /**
   * Update item details.
   * PUT or PATCH items/:id
   */
  async update({
    params: {
      id
    },
    request,
    response
  }) {
    const {
      name,
      description,
      type,
      item
    } = request.post()

    item.name = name || item.name
    item.description = description || item.description

    if (type) {
      const itemType = await ItemType.find(type)
      if (itemType) {
        item.type_id = type
      }
    }

    await item.save()

    if (item.type_id) {
      item.type = await item.type().fetch()
    }

    response.status(200).json({
      message: 'Update Item successfully',
      data: item
    })
  }

  /**
   * Delete a item with id.
   * DELETE items/:id
   */
  async destroy({
    params,
    request,
    response
  }) {}
}

module.exports = ItemController
