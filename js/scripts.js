$(document).ready(function(){
  $('form').submit(function(event) {
    event.prevenDefault();
    var $searchField = $('#search');
    //AJAX
    var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var userSearch = $searchField.val();
    var flickrData = {
      tags: userSearch,
      format: "json"
    };
    function displayPhotos(data) {
      var photoHTML = '<ul>';
      $.each(data.items, function(i, photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photos.media.m + '"></a></li>';
      });
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
    }
    $.getJSON(flickrAPI, flickrData, displayPhotos);

  });

});
