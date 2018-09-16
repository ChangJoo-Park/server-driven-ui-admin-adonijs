'use strict'

const Schema = use('Schema')

class ItemListRelationSchema extends Schema {
  up() {
    this.create('lists_items', function (table) {
      table.increments()
      table.integer('item_id').references('items.id')
      table.integer('list_id').references('lists.id')
    })
  }

  down() {
    this.drop('lists_items')
  }
}

module.exports = ItemListRelationSchema
