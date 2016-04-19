 
 var groceryItems = [
   ["Bread", 1],
   ["Milk",  2.50],
   ["Beef", 10],
   ["Cereal", 1.99],
   ["Celery", 1.25]
];

  var total = 0;
  console.log("The Grocery List is: ");

  groceryItems.forEach(function(item) {
    total += item[1] ;
    console.log(item[0], item[1]);
  });
   
  console.log("The total of the Grocery List: " + total);
  