'use strict'

const Schema = use('Schema')

class ListSchema extends Schema {
  up() {
    this.create('lists', (table) => {
      table.increments()
      table.string('name', 60).notNullable().unique()
      table.string('description')
      table.timestamps()
    })
  }

  down() {
    this.drop('lists')
  }
}

module.exports = ListSchema
