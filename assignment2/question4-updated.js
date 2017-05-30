var mapFunction1 = function() {
    var value = {
        count: 1,
       // sum: (this.stock_price_high+this.stock_price_open+this.stock_price_low+this.stock_price_close+this.stock_price_adj_close)/5
       stock_price_high_avg:this.stock_price_high,
       stock_price_open_avg:this.stock_price_open,
       stock_price_low_avg:this.stock_price_low,
       stock_price_close_avg:this.stock_price_close,
       stock_price_adj_close_avg:this.stock_price_adj_close

    };
    emit(this.stock_symbol, value);
};

var reduceFunction1 = function(stock_symbol, valuesPrices) {
    reducedVal = {
       count: 0,
       stock_price_high_avg:0,
       stock_price_open_avg:0,
       stock_price_low_avg:0,
       stock_price_close_avg:0,
       stock_price_adj_close_avg:0
    };
    valuesPrices.forEach(function(value) {

        reducedVal.count += value.count;
        reducedVal.stock_price_high_avg += value.stock_price_high_avg;
        reducedVal.stock_price_open_avg += value.stock_price_open_avg;
        reducedVal.stock_price_low_avg += value.stock_price_low_avg;
        reducedVal.stock_price_close_avg += value.stock_price_close_avg;
        reducedVal.stock_price_adj_close_avg += value.stock_price_adj_close_avg;
        print("stock_symbol value", stock_symbol, ' ', reducedVal.count);
    });

    print("reduced value", reducedVal.count, reducedVal.stock_price_high_avg)
    return reducedVal;
};

var finalizeFunction1 = function(stock_symbol, reducedVal) {

    reducedVal.stock_price_high_avg_final = reducedVal.stock_price_high_avg / reducedVal.count;
    reducedVal.stock_price_open_avg_final = reducedVal.stock_price_open_avg / reducedVal.count;
    reducedVal.stock_price_low_avg_final = reducedVal.stock_price_low_avg / reducedVal.count;
    reducedVal.stock_price_close_avg_final = reducedVal.stock_price_close_avg / reducedVal.count;
    reducedVal.stock_price_adj_close_avg_final = reducedVal.stock_price_adj_close_avg / reducedVal.count;
    print("stock_symbol value", stock_symbol, ' ', reducedVal.stock_price_high_avg_final);
    return reducedVal;

};



db.data.mapReduce(
    mapFunction1,
    reduceFunction1, {
        out: "map_reduce_example_2",
        finalize: finalizeFunction1
    }
);

print('Map reduce executed successfully');
print(db.map_reduce_example_2.find());
print(db.map_reduce_example_2.count());