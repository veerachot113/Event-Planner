/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p8klmgyiw7hc6k6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c0ibfydk",
    "name": "participants",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cqc0qbyq",
    "name": "participantCount",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p8klmgyiw7hc6k6")

  // remove
  collection.schema.removeField("c0ibfydk")

  // remove
  collection.schema.removeField("cqc0qbyq")

  return dao.saveCollection(collection)
})
