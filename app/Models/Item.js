'use strict'

const Model = use('Model')

class Item extends Model {
  lists() {
    return this.belongsToMany('App/Models/List')
  }

  itemType() {
    return this.belongsTo('App/Models/ItemType')
  }
}

module.exports = Item
