'use strict'

/**
 * Resourceful controller for interacting with itemtypes
 */
class ItemTypeController {
  /**
   * Show a list of all itemtypes.
   * GET itemtypes
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new itemtype.
   * GET itemtypes/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new itemtype.
   * POST itemtypes
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single itemtype.
   * GET itemtypes/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing itemtype.
   * GET itemtypes/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update itemtype details.
   * PUT or PATCH itemtypes/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a itemtype with id.
   * DELETE itemtypes/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ItemTypeController
