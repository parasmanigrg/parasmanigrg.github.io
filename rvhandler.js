var revhandler={
    addreview:function(RName,RType,DnT,Price,Service,Clean,Quality,Notes,Reporter,AvgRating){
    dbhandler.db.transaction(
    function(tx){
    tx.executeSql(//add into reviews table
        "INSERT INTO REVIEWS (RName,RType,DnT,Price, Service,Clean,Quality,Notes,Reporter,AvgRating) VALUES (?, ?,?,?,?,?,?,?,?,?)",
    [RName,RType,DnT,Price, Service,Clean,Quality,Notes,Reporter,AvgRating],
    function(tx,results){},
    function(tx,error){ 
        console.log("Error adding review: "+error.message);
    }
    );
},
    function(error){},
        function(){}
);
},
     lratings :function(loadRatings){
        dbhandler.db.readTransaction(
        function(tx){
            tx.executeSql(
        "SELECT * FROM REVIEWS",  // get the reviews detail form the table
        [],
        function(tx,results){
            loadRatings(results);
            
        },
            function (tx,error){
                console.log("Error loading review:"+error.message);
            }
        );
            },
        )
    },
    
    
    
    DeleteReview:function(name){
        dbhandler.db.transaction(
        function(tx){
         tx.executeSql(
        "DELETE FROM REVIEWS WHERE RName=?", //delete the row form the table
             [name],
             function(tx,results){},
             function(tx,error){
                 console.log("error on delete review"+error.message);
             }
             
       );
        }
            
        
        );
    },
    
    Update:function(UReName,Urestype,Ustart,Uprice,Udser,Uclean,Uquality,Unote,Ureperson,AvgRating){// upgrade the review from the table
        dbhandler.db.transaction(
        function(tx){
            tx.executeSql(
            "UPDATE REVIEWS SET RType=?,DnT=?,Price=?, Service=?,Clean=?,Quality=?,Notes=?,Reporter=?, AvgRating=? WHERE RName=?",
            [Urestype,Ustart,Uprice,Udser,Uclean,Uquality,Unote,Ureperson,AvgRating, UReName],
            function(tx,result){},
            function(tx,error){
                console.log("error on update review: "+error.message);
            })
        });
    }
    
    
   
   
    
    
};