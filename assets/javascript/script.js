$(document).ready(function () {

    //Globals
    var i;
    var topics = ["Anime", "Cartoon & Comics", "Emotions", "Gaming", "Music", "Movies", "Reaction"];
    var $button = $("#buttons");
    var $searchbox = $("#searchbox");
    
    
    
    // Helper function -- dynamically creates buttons for topics array
    var btnList = function (array) {

        $button.empty();

        for (i = 0; i < array.length; i++) {
            newBtn = $("<button>")
                .text(array[i])
                .attr("id", "topic-btn")
                .attr("btn-value", array[i])
                .addClass("button-template btn btn-primary");
            $button.append(newBtn);
        }

    };


    // Helper Function to add new item to array & prevent duplicates
    function pushtToArray() {
        userInput = $searchbox.val();

        if (topics.indexOf(userInput) === -1) {
            topics.push(userInput)
            btnList(topics);
        } else {
            alert("item already added")
        }
    };

    $

    // Search GET request from input field 
    function getRequest() {
        $input = $("#limit");
        inputVal = $input.val()
        userInput = $searchbox.val();
        gifName = userInput
        console.log(userInput)
        gifLimit = inputVal;
        gifRating = "g";
        url = "https://api.giphy.com/v1/gifs/search?api_key=DPiWXm5H6NRZhgKhV6hw7KkmCpHcPEqy&q=" + gifName + "&limit=" + gifLimit + "&offset=0&rating=" + gifRating + "&lang=en";

        $.get(url).then(function (response) {
            $("#results").empty()

            for (i = 0; i < response.data.length; i++) {

                newDiv = $("<div>")
                    .addClass("card flex-container");


                divTwo = $("<div>")
                    .addClass("card-body");

                newP = $("<p>")
                    .addClass("card-text")
                    .text(`Rated: ${response.data[i].rating}`);

                newImg = $("<img>")
                    .attr("src", response.data[i].images.original_still.url)
                    .attr("style", "width:200px; height:200px;")
                    .attr("img-still", response.data[i].images.original_still.url)
                    .attr("img-gif", response.data[i].images.original.url)
                    .attr("img-state", "still")
                    .addClass("gif card-img-top")

                divTwo.append(newP)
                newDiv.append(newImg,divTwo)
                $("#results").append(newDiv)
            }
            console.log(response)
            $searchbox.val("");
        });

    }

    //Search GET request from buttons in array
    function btnRequest(arr) {
        $input = $("#limit");
        inputVal = $input.val()
        userInput = arr
        gifName = userInput
        console.log(userInput)
        gifLimit = inputVal;
        gifRating = "g";
        url = "https://api.giphy.com/v1/gifs/search?api_key=DPiWXm5H6NRZhgKhV6hw7KkmCpHcPEqy&q=" + gifName + "&limit=" + gifLimit + "&offset=0&rating=" + gifRating + "&lang=en";

        $.get(url).then(function (response) {
            $("#results").empty()

            for (i = 0; i < response.data.length; i++) {

                newDiv = $("<div>")
                    .addClass("card flex-container");


                divTwo = $("<div>")
                    .addClass("card-body");

                newP = $("<p>")
                    .addClass("card-text")
                    .text(`Rated: ${response.data[i].rating}`);

                newImg = $("<img>")
                    .attr("src", response.data[i].images.original_still.url)
                    .attr("style", "width:200px; height:200px;")
                    .attr("img-still", response.data[i].images.original_still.url)
                    .attr("img-gif", response.data[i].images.original.url)
                    .attr("img-state", "still")
                    .addClass("gif card-img-top")

                divTwo.append(newP)
                newDiv.append(newImg,divTwo)
                $("#results").append(newDiv)
            }
            console.log(response)
        });

    }

    // Enables pressing enter to search
    $searchbox.keypress(function (e) {
        if (e.which == 13) {
            getRequest()
        }
    });



    // Click events 
    $(document).on("click", ".gif", function () {
        var state = $(this).attr("img-state");

        if (state === "still") {
            $(this).attr("src", $(this).attr("img-gif"));
            $(this).attr("img-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("img-still"));
            $(this).attr('img-state', 'still');
        }
    })


    $(".searchbtn").on("click", function () {
        getRequest()
    });

    $(".clearbtn").on("click", function () {
        $("#results").empty();
    });

    $(".addbtn").on("click", function () {
        pushtToArray();
        console.log(topics);
    });


    $(document).on("click", "#topic-btn", function () {
        topicname = $(this).attr("btn-value");
        btnRequest(topicname)
    });



    //Calling function to create starter buttons
    btnList(topics)

});



