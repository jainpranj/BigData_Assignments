package assignment2.mapreduce.mongo;

import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBObject;
import com.mongodb.MapReduceCommand;
import com.mongodb.MapReduceOutput;
import com.mongodb.Mongo;


public class Question3 {

 /**
  * @param args
  */
 public static void main(String[] args) {

  Mongo mongo;
  
  try {
   mongo = new Mongo("localhost", 27017);
   DB db = mongo.getDB("nyse");

   DBCollection books = db.getCollection("data");


   
   String map = "function() { emit(this.stock_symbol, this.stock_price_high);};";
   
   String reduce =" function(stock_symbol, valuesPrices) {count = 0;sum = 0;valuesPrices.forEach(function(value) {count += 1;sum += value;});avg = sum / count;return avg;};";
   
   MapReduceCommand cmd = new MapReduceCommand(books, map, reduce,
     null, MapReduceCommand.OutputType.INLINE, null);

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