'use strict'

const Schema = use('Schema')

class ItemTypeSchema extends Schema {
  up() {
    this.create('item_types', (table) => {
      table.increments()
      table.string('name', 60).notNullable().unique()
      table.timestamps()
    })
  }

  down() {
    this.drop('item_types')
  }
}

module.exports = ItemTypeSchema
