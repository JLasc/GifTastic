$( document ).ready(function() {
    
    var i;
    var topics = ["Anime", "Cartoon & Comics", "Emotions", "Gaming", "Music", "Movies", "Reaction"];
    var $button = $("#buttons");
    var $searchbox = $("#searchbox");


    var btnList = function(array) {

        $button.empty();

        for (i=0; i < array.length; i++) {
            newBtn = $("<button>")
                .text(array[i])
                .attr("id", "topic-btn")
                .attr("btn-value", array[i])
                .addClass("button-template btn btn-primary");
            $button.append(newBtn);
        }

    };

    function pushtToArray () {
        userInput = $searchbox.val();
        topics.push(userInput);
        btnList(topics); 
        alert(userInput)
    };


    function getRequest() {
        
         userInput = $searchbox.val();
         gifName = userInput
         console.log(userInput)
         gifLimit = 10;
         gifRating = "g";
         url = "https://api.giphy.com/v1/gifs/search?api_key=DPiWXm5H6NRZhgKhV6hw7KkmCpHcPEqy&q=" + gifName + "&limit=" + gifLimit + "&offset=0&rating=" + gifRating + "&lang=en";

         $.get(url).then(function (response) {
             $("#results").empty()

             for(i=0; i < response.data.length; i++) {
                 newImg = $("<img>")
                    .attr("src", response.data[i].images.original_still.url)
                    .attr("style", "width:200px; height:200px;")
                    .attr("img-still", response.data[i].images.original_still.url)
                    .attr("img-gif", response.data[i].images.original.url)
                    .attr("img-state", "still")
                    .addClass("gif");
                $("#results").append(newImg)
             }
             console.log(response)
             $searchbox.val("");
         });
    
    }


    function btnRequest(arr) {
         userInput = arr
         gifName = userInput
         console.log(userInput)
         gifLimit = 10;
         gifRating = "g";
         url = "https://api.giphy.com/v1/gifs/search?api_key=DPiWXm5H6NRZhgKhV6hw7KkmCpHcPEqy&q=" + gifName + "&limit=" + gifLimit + "&offset=0&rating=" + gifRating + "&lang=en";

         $.get(url).then(function (response) {
             $("#results").empty()

             for(i=0; i < response.data.length; i++) {
                 newImg = $("<img>")
                    .attr("src", response.data[i].images.original_still.url)
                    .attr("style", "width:200px; height:200px;")
                    .attr("img-still", response.data[i].images.original_still.url)
                    .attr("img-gif", response.data[i].images.original.url)
                    .attr("img-state", "still")
                    .addClass("gif");
                $("#results").append(newImg)
             }
             console.log(response)
         });
    
    }

    $searchbox.keypress(function(e) {
        if(e.which == 13) {
          getRequest()
        }
    });


    $(document).on("click", ".gif", function() {
        var state = $(this).attr("img-state");

        if (state === "still") {
            $(this).attr("src", $(this).attr("img-gif"));
            $(this).attr("img-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("img-still"));
            $(this).attr('img-state', 'still');
        }
    })


    $(".searchbtn").on("click", function() {
        getRequest()
    });
  
    $(".addbtn").on("click", function() {
        pushtToArray();
        console.log(topics);
    });
    
        
    $(document).on("click", "#topic-btn", function() {
        topicname = $(this).attr("btn-value");
        btnRequest(topicname)
    });

    
    btnList(topics)
    
});


