'use strict'

const Model = use('Model')

class Item extends Model {
  lists() {
    return this.belongsToMany('App/Models/List')
  }

  type() {
    return this.belongsTo('App/Models/ItemType', 'type_id', 'item_types.id')
  }
}

module.exports = Item
