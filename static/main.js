console.log("this is working");

$('.favButton').click(function() {
  console.log("clicked")
  var that = this;
  var mountainName = $(that).parent().find("h2").text();
  var mountainLat = $(that).parent().find("h2").attr("data-latitude");
  var mountainLong = $(that).parent().find("h2").attr("data-longitude");

  $.ajax({
    url: '/weather',
    method: 'POST',
    data: {
      name: mountainName,
      latitude: mountainLat ,
      longitude: mountainLong
    },
    success: function(data){
      $(that).text("Saved");
    },
    error: function(){

    }

  })
})


