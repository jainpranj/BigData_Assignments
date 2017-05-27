var mapFunction1 = function() {
    var value = {
        count: 1,
        sum: this.stock_price_high
    };
    emit(this.stock_symbol, value);
};

var reduceFunction1 = function(stock_symbol, valuesPrices) {
    reducedVal = {
        count: 0,
        sum: 0
    };
    valuesPrices.forEach(function(value) {

        reducedVal.count += value.count;
        reducedVal.sum += value.sum;
        print("stock_symbol value", stock_symbol, ' ', reducedVal.count);
    });

    print("reduced value", reducedVal.count, reducedVal.sum)
    return reducedVal;
};

var finalizeFunction1 = function(stock_symbol, reducedVal) {

    reducedVal.avg = reducedVal.sum / reducedVal.count;
    print("stock_symbol value", stock_symbol, ' ', reducedVal.avg);
    return reducedVal;

};



db.data.mapReduce(
    mapFunction1,
    reduceFunction1, {
        out: "map_reduce_example_1",
        finalize: finalizeFunction1
    }
);

print('Map reduce executed successfully');
print(db.map_reduce_example_1.find());
print(db.map_reduce_example_1.count());