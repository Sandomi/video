// JavaScript source code
$(function whenDomIsReady(){
    $('.the-list-of-videos .loading').show();

  
    setTimeout(function afterRetrievingVideos(){
            var videos =[{
                            Title:'Video 1', 
                            src:'https://www.youtube.com/embed/0z5kR6MyEJo'
                        }];
    $('.the-list-of-videos.loading').hide();  
    
    var videosHtml = _.reduce(videos, function(html,video){
        html += '<li class="video">'+
            '<h2>' + video.Title + '</h2>' +
            '<iframe width ="640" height = "390" src = "' + video.src + '" frameborder ="0" allowfullscreen><iframe>' +
            '</li>';
        return html;
    },'');
    $('.the-list-of-videos ul').replaceWith(videosHtml);

    }, 750);

});
