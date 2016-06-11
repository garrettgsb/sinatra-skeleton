$(document).ready(function() {

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});

var $bottom = $(".bottom");
var $bubble = "<div class='bubble'></div>";
$bottom.before($bubble);

var nextId = 0;

function bubbleGenerate() {
    var diameter = Math.random() * (40-5) + 5;
    var fillColor = "rgba(40,80," + Math.round(240-(diameter*3)) + "," + (5 / diameter);
    console.log(fillColor);
    bubble = document.createElement("div");
    $(bubble).attr('class', 'bubble');

    //Random diameter between 5 and 30 px
    //Rise speed (and soon, color) is based on diameter

    var horiz = Math.random() * (($(document).width()) - (diameter*2)) + diameter;
    $(bubble).data("riseSpeed", (diameter * 200));
    $(bubble).css({height: diameter, width: diameter, marginTop: $aquarium.height() + 50, marginLeft: horiz, borderColor: fillColor});
    return bubble;
}
