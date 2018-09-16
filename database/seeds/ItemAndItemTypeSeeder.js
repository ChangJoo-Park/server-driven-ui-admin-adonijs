'use strict'

/*
|--------------------------------------------------------------------------
| ItemAndItemTypeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')
const Database = use('Database')

class ItemAndItemTypeSeeder {
  async run() {
    // Item Types
    if ((await Database.table('item_types')).length === 0) {
      await Factory
        .model('App/Models/ItemType')
        .create({
          name: 'items'
        })
      await Factory
        .model('App/Models/ItemType')
        .create({
          name: 'banners'
        })
      await Factory
        .model('App/Models/ItemType')
        .create({
          name: 'events'
        })
    }
    const types = await Database.table('item_types')

    if ((await Database.table('items')).length === 0) {
      await Factory.model('App/Models/Item').createMany(100, {
        types
      })
    }

    if ((await Database.table('lists')).length === 0) {
      await Factory.model('App/Models/List').createMany(5)
    }
  }
}

module.exports = ItemAndItemTypeSeeder
