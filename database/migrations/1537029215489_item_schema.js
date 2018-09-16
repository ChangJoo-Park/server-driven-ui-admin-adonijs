'use strict'

const Schema = use('Schema')

class ItemSchema extends Schema {
  up() {
    this.create('items', (table) => {
      table.increments()
      table.string('name', 60).notNullable().unique()
      table.string('description', 100).notNullable().unique()
      table.integer('type_id').unsigned().notNullable();
      table.foreign('type_id').references('id').inTable('item_types');
      table.timestamps()
    })
  }

  down() {
    this.drop('items')
  }
}

module.exports = ItemSchema
