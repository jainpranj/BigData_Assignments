//on existing file
db.data.ensureIndex({"stock_symbol":-1})
//on new data
db.data1.ensureIndex({"stock_symbol":1})

//list indexes
db.data.getIndexes()
db.data1.getIndexes()