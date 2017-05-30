//on existing file--Deprecated method
db.data.ensureIndex({"stock_symbol":-1})


db.data.createIndex({"stock_price_open":-1})
//on new data
db.data1.ensureIndex({"stock_symbol":1})


db.data.createIndex({"stock_price_open":-1})

//list indexes
db.data.getIndexes()
db.data1.getIndexes()
