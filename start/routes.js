'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {import('@adonisjs/framework/src/Route/Manager'} */
const Route = use('Route')

Route.get('/', () => {
  return {
    greeting: 'Hello world in JSON'
  }
})
/* Items */
Route.get('/items', 'ItemController.index')
Route.get('/items/:id', 'ItemController.show')

/* Lists */
Route.get('lists', 'ListController.index')
Route.get('lists/:id', 'ListController.show')
Route.post('lists', 'ListController.store')
Route.put('lists/:id', 'ListController.update')
Route.delete('lists/:id', 'ListController.delete')
