console.log("this is working");

$('#addFav').click(function() {
  console.log("clicked")

  var mountainName = document.getElementById("mtnName").value;
  var mountainLat = document.getElementById("latitude").value;
  var mountainLong = document.getElementById("longitude").value;

  $.ajax({
    url: '/weather',
    method: 'POST',
    data: {
      name: mountainName,
      latitude: mountainLat ,
      longitude: mountainLong
    }
  }).done(function(){
    console.log("done");
  }).fail(function(err) {
    console.log("err", err);
  }).always(function() {
    console.log("really done");
  })
})


