/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  collection.listRule = "@request.auth.id != \"\" || @request.auth.isAdmin = true"
  collection.viewRule = "@request.auth.id != \"\" || @request.auth.isAdmin = true"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  collection.listRule = "@request.auth.id != \"\" || @request.auth.admin = true"
  collection.viewRule = "@request.auth.id != \"\" || @request.auth.admin = true"

  return dao.saveCollection(collection)
})
