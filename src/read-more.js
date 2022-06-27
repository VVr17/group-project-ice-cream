var content = document.getElementById("content");
var button = document.getElementById("read-more");

button.onclick = function () {
    if (content.className == "open") {
        //shrink the box   
        content.className = "";
        button.innerHTML = "Read more";
    } else {
        //expand the box
        content.className = "open";
        button.innerHTML = "Read less";
    }

};