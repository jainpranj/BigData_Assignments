var mapFunction1 = function() {
    emit(this.stock_symbol, this.stock_price_high);
};

var reduceFunction1 = function(stock_symbol, valuesPrices) {
    count = 0;
    sum = 0;
    valuesPrices.forEach(function(value) {
        count += 1;
        sum += value;
        print("stock_symbol value"stock_symbol,' ',value);
    });
    avg = sum / count;
    print("stock_symbol avg ", avg);
    return avg;
};


db.data.mapReduce(
    mapFunction1,
    reduceFunction1, {
        out: "map_reduce_example"
    }
)

print('Map reduce executed successfully');
print(db.map_reduce_example.find()); 
print("count of map redcue collection",db.map_reduce_example.count()); 
//mongo localhost/nyse question3.js