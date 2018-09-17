'use strict'

const Schema = use('Schema')

class ListSchema extends Schema {
  up() {
    this.create('lists', (table) => {
      table.increments()
      table.string('name', 60).notNullable()
      table.string('description').defaultTo('')
      table.timestamps()
    })
  }

  down() {
    this.drop('lists')
  }
}

module.exports = ListSchema
