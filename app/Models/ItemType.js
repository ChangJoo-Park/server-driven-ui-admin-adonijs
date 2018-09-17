'use strict'

const Model = use('Model')

class ItemType extends Model {
  items() {
    return this.hasMany('App/Models/Item')
  }
}

module.exports = ItemType
