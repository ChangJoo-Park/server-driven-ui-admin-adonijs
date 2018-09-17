'use strict'

const Schema = use('Schema')

class ItemSchema extends Schema {
  up() {
    this.create('items', (table) => {
      table.increments()
      table.string('name', 60).notNullable()
      table.string('description', 100).notNullable().defaultTo('')
      table.integer('item_type_id').unsigned();
      table.timestamps()
    })
  }

  down() {
    this.drop('items')
  }
}

module.exports = ItemSchema
