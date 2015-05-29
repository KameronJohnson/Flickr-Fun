$(document).ready(function(){
  $('form').submit(function(event) {
    event.prevenDefault();
    var $searchField = $('#search');


  })
    var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var
    $.getJSON(flickrAPI, flickrData, displayPhotos);

});

});
