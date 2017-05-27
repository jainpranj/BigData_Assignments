var mapFunction1 = function() {
    emit(this.Gender, 1);
};

var reduceFunction1 = function(stock_symbol, valuesPrices) {
    
    sum = 0;
    valuesPrices.forEach(function(value) {
   
        sum += value;
        print("count value in reducer ", value);

       
    });
    
   
    print("moviedID avg ", sum,stock_symbol);
    return sum;
};


                


db.data.mapReduce(
    mapFunction1,
    reduceFunction1, {
        out: "gender_count",
 
         
    }
);

print('Map reduce executed successfully');


print(db.gender_count.count()); 
//mongo localhost/users  question7_3.js

//sed 's/::/,/g' users.dat > users.csv
//mongoimport --db users --collection data --type csv --headerline --file users.csv