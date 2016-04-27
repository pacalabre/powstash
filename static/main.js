console.log("this is working");

$('#addFav').click(function() {
  var mtnName = document.getElementById("mtnName");
  var mtnLat = document.getElementById("latitude");
  var mtnLong = document.getElementById("longitude");
  console.log(mtnName);
  console.log(mtnLat);
  console.log(mtnLong);
    $.ajax({
      method: 'POST',
      name: mtnName ,
      latitude: mtnLat ,
      longitude: mtnLong
    }).done (function(){
      console.log("done");
    })
})


