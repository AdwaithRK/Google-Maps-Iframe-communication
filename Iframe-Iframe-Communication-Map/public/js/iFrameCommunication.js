var parentSource, parentOrigin;
window.onload = function(){
    console.log("In the map...")
    if ( window.addEventListener ) {
        window.addEventListener('message', handleMessage, false);
    }
}

function handleMessage(event){
    if(!parentOrigin || !parentOrigin){
        parentSource = event.source;
        parentOrigin = event.origin;
    }
    console.log("data in map is--",JSON.parse(event.data));
    setMarker(JSON.parse(event.data));
}

