'use strict'

/**
 * Resourceful controller for interacting with items
 */
class ItemController {
  /**
   * Show a list of all items.
   * GET items
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new item.
   * GET items/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new item.
   * POST items
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single item.
   * GET items/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing item.
   * GET items/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update item details.
   * PUT or PATCH items/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a item with id.
   * DELETE items/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ItemController
