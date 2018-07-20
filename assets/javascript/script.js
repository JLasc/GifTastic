$( document ).ready(function() {
    
    var i;
    var topics = ["Anime", "Cartoon & Comics", "Emotions", "Gaming", "Music", "Movies", "Reaction"];
    var $button = $("#buttons");

    for (i=0; i < topics.length; i++) {
        newBtn = $("<button>")
            .text(topics[i])
            .attr("id", "topic-btn")
            .attr("btn-value", topics[i])
            .addClass("button-template btn btn-primary");
        $button.append(newBtn)
    }


    
$(document).on("click", "#topic-btn", function() {
    topicname = $(this).attr("btn-value");
    alert(topicname)
})



});


