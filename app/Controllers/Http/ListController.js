'use strict'
const List = use('App/Models/List')
/**
 * Resourceful controller for interacting with lists
 */
class ListController {
  /**
   * Show a list of all lists.
   * GET lists
   */
  async index({
    request,
    response,
    view
  }) {
    const lists = await List.query()
      .with('items')
      .fetch()
    response.status(200).json({
      message: 'This is all of lists',
      data: lists
    })
  }

  /**
   * Create/save a new list.
   * POST lists
   */
  async store({
    request,
    response
  }) {
    const {
      name,
      description,
      items
    } = request.post()
    const list = await List.create({
      name,
      description
    })
    if (items && items.length > 0) {
      await list.items().detach()
      await list.items().attach(items)
      list.items = await list.items().fetch()
    }

    response.status(201).json({
      message: 'List create successfully',
      data: list
    })
  }

  /**
   * Display a single list.
   * GET lists/:id
   */
  async show({
    params,
    request,
    response,
    view
  }) {
    const {
      id
    } = request.params
    const list = await List.find(id)
    list.items = await list.items().fetch()
    return list
    response.status(200).json({
      message: 'one list',
      data: list
    })
  }

  /**
   * Update list details.
   * PUT or PATCH lists/:id
   */
  async update({
    params,
    request,
    response
  }) {
    const {
      id
    } = params
    const {
      items
    } = request.post()
    const list = await List.find(id)

    if (items && items.length > 0) {
      await list.items().detach()
      await list.items().attach(items)
      list.items = await list.items().fetch()
    }

    response.status(200).json({
      message: 'Update List successfully',
      data: list
    })
  }

  /**
   * Delete a list with id.
   * DELETE lists/:id
   */
  async delete({
    params,
    request,
    response
  }) {
    const {
      id
    } = params

    const {
      list
    } = await List.find(1)

    await list.delete()
    response.status(200).json({
      message: 'Successfully deleted this list.',
      deleted: true
    })
  }
}

module.exports = ListController
