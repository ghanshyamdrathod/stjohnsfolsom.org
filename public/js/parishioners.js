$(document).ready(function(){
	get_announcements();
	get_events();
});

function get_announcements(){
    $.ajax({
      url: "https://stjohnfolsom.schoolyardapp.com/get_announcements.json",
      cache: false,
      type: 'get',
      dataType: 'jsonp',
      success: function(response){
         $.each(response, function(i, item){ 
                 var dt = response[i].updated_at.replace(/T|Z/g, " ").replace(/-/g, "/");
                 $("#announcements").append ('<div class="data-block long-block">');
                 $("#announcements").append('<h5>'+ response[i].title + '</h5>'); 
                 $("#announcements").append('<p>' +  'Posted on :: ' +  dt + '</p>');       
                 $("#announcements").append( response[i].content );
                 $("#announcements").append('</div>');                
          
         });
      }
    });


}


function get_events(){
    $.ajax({
      url: "https://stjohnfolsom.schoolyardapp.com/get_events.json",
      //url: "http://test-sjnds.local-sy.com:4000/get_events.json",
      cache: false,
      type: 'get',
      dataType: 'jsonp',
      success: function(response){
         $.each(response, function(i, item){ 
                 var dt = response[i].updated_at.replace(/T|Z/g, " ").replace(/-/g, "/");
                 $("#events").append ('<div class="data-block long-block">');
                 $("#events").append('<h5>'+ response[i].title + '</h5>'); 
                 $("#events").append('<p>' +  'Posted on :: ' +  dt + '</p>');       
                 $("#events").append( response[i].description );
                 $("#events").append('</div>');                
          
         });
      }
    });


}


