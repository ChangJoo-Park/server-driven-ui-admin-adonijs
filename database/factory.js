'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/User', (faker) => {
  return {
    username: faker.username()
  }
})

Factory.blueprint('App/Models/ItemType', (faker, i, data) => {
  return {
    name: data.name
  }
})

Factory.blueprint('App/Models/Item', (faker, i, data) => {
  const ItemType = data.types[faker.integer({
    min: 0,
    max: data.types.length - 1
  })]
  return {
    name: faker.word(),
    description: faker.sentence(),
    type_id: ItemType.id
  }
})

Factory.blueprint('App/Models/List', (faker, i, data) => {
  return {
    name: faker.sentence({
      words: 5
    }),
    description: faker.sentence()
  }
})
