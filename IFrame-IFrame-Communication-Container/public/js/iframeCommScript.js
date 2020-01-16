var wn;
window.onload = function(){
    // get reference to window inside the iframe
    wn = document.getElementById('map-frame').contentWindow;
    // postMessage arguments: data to send, target origin
    window.addEventListener("message", plotPoints, false);
    wn.postMessage('Hello to iframe from parent!', '*');
    plot_form = document.getElementById("coordinate-form")
    plot_form.addEventListener("submit", sendPointsToMap, false);
}

function plotPoints(event){
    let coordinates = JSON. parse(event.data);
    console.log("I am plotting points...", event.data);
    document.getElementById("latitude").value = coordinates["lat"];
    document.getElementById("longitude").value = coordinates["lng"];
}

function sendPointsToMap(event){
    event.preventDefault();
    let latitude = document.getElementById("latitude").value;
    let longitude = document.getElementById("longitude").value;
    let coordinates = {"lat": latitude, "lng": longitude}
    debugger
    wn.postMessage( JSON.stringify(coordinates), '*');
}
