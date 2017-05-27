for filename in *; do  echo $filename; mongoimport --db nyse --collection data1 --type csv --headerline --file $filename; done


#ls -f ./NYSE | while read -r file; do  mongoimport --db nyse --collection data --type csv --headerline --file $file; done
