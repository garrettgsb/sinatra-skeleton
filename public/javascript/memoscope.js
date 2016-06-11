$(document).ready(function() {
  $.getJSON("/get_deck") //I thought I needed a function here, but it turns out I don't.
    .success(function(data){
    //Begin massive stupid getJSON block:
    // Add the whole rest of the damn app inside this stupid thing.
    $deck = data;


  //Passes all of the cards in the database to the array $deck
  //as JS objects. Obviously needs refinement in later versions.
  var $deck;
  getDeck();

  //TODO: Add a way to sort these guys and make sure that we're
  // not recycling cards too often.
  var card1 = $deck[0];
  var card2 = $deck[1];
  var card3 = $deck[2];

  $('#card1').text(card1.front);
  $('#card2').text(card2.front);
  $('#card3').text(card3.front);

//End of massive stupid getJSON block
  }).fail(function(){
    console.log("Yeah JSON request didn't work.");
  });
});


function getDeck() {

}

function postNewScore() {

}
