package assignment2.mapreduce.mongo;

import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBObject;
import com.mongodb.MapReduceCommand;
import com.mongodb.MapReduceOutput;
import com.mongodb.Mongo;


public class Question4 {

 /**
  * @param args
  */
 public static void main(String[] args) {

  Mongo mongo;
  
  try {
   mongo = new Mongo("localhost", 27017);
   DB db = mongo.getDB("nyse");

   DBCollection books = db.getCollection("data");


   
   String map ="function() {var value = {count: 1,sum: this.stock_price_high};emit(this.stock_symbol, value);};";
   
   String reduce = "function(stock_symbol, valuesPrices) {reducedVal = {count: 0,sum: 0};valuesPrices.forEach(function(value) {reducedVal.count += value.count;reducedVal.sum += value.sum;});return reducedVal;};";
   String finalize=" function(stock_symbol, reducedVal) { reducedVal.avg = reducedVal.sum / reducedVal.count;return reducedVal;};";
   MapReduceCommand cmd = new MapReduceCommand(books, map, reduce,
		   null, MapReduceCommand.OutputType.INLINE, null);
   cmd.setFinalize(finalize);
   MapReduceOutput out = books.mapReduce(cmd);

   for (DBObject o : out.results()) {
    System.out.println(o.toString());
   }
  } catch (Exception e) {
   // TODO Auto-generated catch block
   e.printStackTrace();
  }
 }
}