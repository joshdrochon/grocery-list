$(document).ready(function(){

  $("#groceries").submit(function(event){

    event.preventDefault();

    var items = ["itemI", "itemII", "itemIII", "itemIV", "itemV"];

    var sortedGroceries = [];

    items.forEach(function(item){
      var input = $("input#" + item).val();
      $("." + item).text(input);
      sortedGroceries.push(input);
    });
    sortedGroceries.sort();

    toUpper = function(sortedGroceries){
      return sortedGroceries.toUpperCase();
    };
    var sortedUpper = sortedGroceries.map(toUpper);
    alert(sortedUpper);
  });
});
