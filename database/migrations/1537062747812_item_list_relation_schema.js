'use strict'

const Schema = use('Schema')

class ItemListRelationSchema extends Schema {
  up() {
    this.create('item_list', function (table) {
      table.integer('item_id').unsigned().index('list_id')
      table.integer('list_id').unsigned().index('item_id')
      table.foreign('item_id').references('items.id').onDelete('cascade')
      table.foreign('list_id').references('lists.id').onDelete('cascade')
    })
  }

  down() {
    this.drop('item_list')
  }
}

module.exports = ItemListRelationSchema
