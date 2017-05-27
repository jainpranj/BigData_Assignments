var mapFunction1 = function() {
    emit(this.UserID, this.MoviedID);
};

var reduceFunction1 = function(stock_symbol, valuesPrices) {
    
    sum = 0;
    valuesPrices.forEach(function(value) {
   
        sum += 1;
       
    });
    
   
    print("moviedID avg ", sum);
    return sum;
};


                


db.data.mapReduce(
    mapFunction1,
    reduceFunction1, {
        out: "movies_per_user",
 
         
    }
);

print('Map reduce executed successfully');


print(db.movies_per_user.count()); 

//mongo localhost/ratings question7_2.js

