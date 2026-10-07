var image1 = document.getElementById("image1");
var image2 = document.getElementById("image2");
var image3 = document.getElementById("image3");

var storyTitle = document.getElementById("storyTitle");

var caption1 = document.getElementById("caption1");
var caption2 = document.getElementById("caption2");
var caption3 = document.getElementById("caption3");


function showStoryOne() {

    storyTitle.innerHTML = "The Misunderstanding";

    image1.src = "images/message.jpg";
    image2.src = "images/friends.jpg";
    image3.src = "images/happy.jpg";

    caption1.innerHTML =
        "A message arrives that immediately makes them worried.";

    caption2.innerHTML =
        "They show the message to a friend and try to understand it.";

    caption3.innerHTML =
        "They finally realize they misunderstood the message.";
}


function showStoryTwo() {

    storyTitle.innerHTML = "The Bad News";

    image1.src = "images/happy.jpg";
    image2.src = "images/friends.jpg";
    image3.src = "images/message.jpg";

    caption1.innerHTML =
        "Everything seems normal when they receive a message.";

    caption2.innerHTML =
        "They share the message with a friend.";

    caption3.innerHTML =
        "After reading it more carefully, they realize something is wrong.";
}


document.getElementById("storyOneButton").addEventListener("click", function() {

    showStoryOne();

});


document.getElementById("storyTwoButton").addEventListener("click", function() {

    showStoryTwo();

});