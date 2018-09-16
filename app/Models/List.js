'use strict'

const Model = use('Model')

class List extends Model {
  items() {
    return this.belongsToMany('App/Models/Item')
  }
}

module.exports = List
