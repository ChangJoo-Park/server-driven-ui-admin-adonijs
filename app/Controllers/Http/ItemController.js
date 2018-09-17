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
    const items = await Item.query()
      .with('lists')
      .with('itemType')
      .fetch()

    return items
  }

  /**
   * Create/save a new item.
   * POST items
   */
  async store({
    request,
    response
  }) {
    const {
      name,
      description,
      type
    } = request.post()
    console.log('name => ', name)
    console.log('description => ', description)
    console.log('type => ', type)
    const item = await Item.create({
      name,
      description
    })

    if (type) {
      item.itemType = await ItemType.find(type)
      await item.save()
    }

    response.status(201).json({
      message: 'Item created successfully',
      data: item
    })
  }

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
      itemType,
      item
    } = request.post()

    item.name = name || item.name
    item.description = description || item.description
    item.item_type_id = itemType || item.item_type_id

    await item.save()

    if (item.item_type_id) {
      item.itemType = await item.itemType().fetch()
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
  async delete({
    params: {
      id
    },
    request,
    response
  }) {
    const {
      item
    } = request.post()

    await item.delete()

    response.status(200).json({
      message: 'Successfully deleted this item.',
      deleted: true
    })
  }
}

module.exports = ItemController
