$(document).ready( function (){
  var size;
  function sketchSize(size) {
    var sketchGrid = (size * 32);
    var container = $("<div class='innerContainer'></div>");
    for (var i = 0; i < size; i++) { 
      for (var j = 0; j < size; j++) { 
      container.append($("<div></div>").addClass("newDiv")).css({"width": sketchGrid, "height": sketchGrid});
      }
    }
    $(".container").html(container);
  }
  function askSize() {
    var size = prompt("Specify the quantity of divs");
    if ((size > 0) && (size <= 16)) {
      sketchSize(size);
    } else {
      alert("Invalid values, please put another value"); 
    }    
  }  

  $('#new-grid').on('click', function(){
    askSize();
    $('.newDiv').on('mouseenter', function(){
      $(this).css("background-color", "blue");
    });
  });

  $('#random').on('click', function(){
    askSize();
    $('.newDiv').on('mouseenter', function(){
      var back = ["red","blue","gray", "green", "yellow", "orange"];
      var rand = back[Math.floor(Math.random() * back.length)];
      $(this).css('background',rand);
    });
  });

  $('#faded').on('click', function(){
    askSize();
    $('.newDiv').on('mouseenter', function(){
      var opac = $(this).css('opacity');
      var fade = opac - 0.1;
      if (fade > 0) { $(this).css("opacity", fade); }
      else {$(this).css("opacity", 0);}      
    });
  });
});