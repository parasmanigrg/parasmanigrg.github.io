var dbhandler = {
    db : null,
  createDatabase:function(){//open database
        this.db=window.openDatabase("irate", "1.0", "RateDB", 1000000);
   
  this.db.transaction(function (tx){
     //create table in database
      tx.executeSql(
          "CREATE TABLE IF NOT EXISTS REVIEWS (RName,RType,DnT,Price,Service,Clean,Quality,Notes,Reporter,AvgRating)", 
    [],
          
          function (tx,result){},
          function (tx,error){
              console.log("Error while creating table:"+error.message)
          }
   );
  },
                      
   function (error){//erro message
      console.log ("Trasaction error:"+error.message);
  },  
                      function(){
      console.log("DB created successfully");
  }
);
  }
}
