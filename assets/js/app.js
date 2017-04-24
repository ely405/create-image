function creatingDiv(getURL){
    var container = document.getElementById("container");
    var div = document.createElement("div");
    var img = document.createElement("img");
    
    img.setAttribute("src", getURL);
    div.classList.add("image-container");
    div.append(img);
    container.append(div);
}

var inputURL = document.getElementById("url");
function getURL(e){
    if(e.keyCode == 13){
        creatingDiv(this.value);
        this.value = "";
    }
}
inputURL.addEventListener("keydown", getURL);