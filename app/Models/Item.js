'use strict'

const Model = use('Model')

class Item extends Model {
  lists() {
    return this.belongsToMany('App/Models/List')
  }
}

module.exports = Item
