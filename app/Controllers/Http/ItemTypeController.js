'use strict'
const ItemType = use('App/Models/ItemType')
/**
 * Resourceful controller for interacting with itemtypes
 */
class ItemTypeController {
  /**
   * Show a list of all itemtypes.
   * GET itemtypes
   */
  async index({
    request,
    response
  }) {
    const itemTypes = await ItemType
      .query()
      .with('items')
      .withCount('items')
      .fetch()

    return itemTypes
  }

  /**
   * Create/save a new itemtype.
   * POST itemtypes
   */
  async store({
    request,
    response
  }) {
    const {
      name
    } = request.post()
    const existsType = await ItemType.query().where('name', name).fetch()
    if (existsType) {
      console.log('existsType => ')
      return response.status(403).json({
        message: `ItemType ${name} is exists`,
        data: existsType
      })
    }
    const itemType = await ItemType.create({
      name
    })

    return response.status(201).json({
      message: 'ItemType created successfully',
      data: itemType
    })
  }

  /**
   * Display a single itemtype.
   * GET itemtypes/:id
   */
  async show({
    params,
    request,
    response,
    view
  }) {
    const {
      itemType
    } = request.post()

    itemType.items = await itemType.items().fetch()
    response.status(200).json({
      message: 'Here is your Item',
      data: itemType
    })
  }

  /**
   * Update itemtype details.
   * PUT or PATCH itemtypes/:id
   */
  async update({
    params,
    request,
    response
  }) {}

  /**
   * Delete a itemtype with id.
   * DELETE itemtypes/:id
   */
  async delete({
    params: {
      id
    },
    request,
    response
  }) {
    const {
      itemType
    } = request.post()

    await itemType.delete()

    return response.status(200).json({
      message: 'Successfully deleted this item type.',
      deleted: true
    })
  }
}

module.exports = ItemTypeController
