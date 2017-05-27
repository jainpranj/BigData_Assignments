var mapFunction1 = function() {
    emit(this.MoviedID, this.Rating);
};

var reduceFunction1 = function(stock_symbol, valuesPrices) {
    count = 0;
    rating_sum = 0;
    valuesPrices.forEach(function(value) {
        count += 1;
        rating_sum += value;
        //print("stock_symbol value"stock_symbol,' ',value);
    });
    
    avg_rating = rating_sum / count;
    print("moviedID avg ", avg_rating);
    return avg_rating;
};


                


db.data.mapReduce(
    mapFunction1,
    reduceFunction1, {
        out: "top_25",

         
    }
);

print('Map reduce executed successfully');

print(db.top_25.find()); 
print(db.top_25.count()); 

//db.top_25.find({}).sort({"value":-1}).limit(25)


//mongo localhost/ratings question7_1.js

//sed 's/:/,/g' ratings.dat > ratings.csv
//sed 's/::/,/g' ratings.dat > ratings.csv
//mongoimport --db ratings --collection data --type csv --headerline --file ratings.csv