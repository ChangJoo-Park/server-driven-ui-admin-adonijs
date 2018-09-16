'use strict'

/**
 * Resourceful controller for interacting with lists
 */
class ListController {
  /**
   * Show a list of all lists.
   * GET lists
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new list.
   * GET lists/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new list.
   * POST lists
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single list.
   * GET lists/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing list.
   * GET lists/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update list details.
   * PUT or PATCH lists/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a list with id.
   * DELETE lists/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ListController
