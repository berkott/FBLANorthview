function funcBackend(page){
    app.content.get(page)
        .then(data => organizeData(data, page))
        .catch(error => toast("An error has occured loading the page" + error))
};

function organizeData(data, page){
    $("#loading-" + page).remove();
    console.log(data);
    var keys = Object.keys(data);
    for (var i in keys) {
        if (keys[i] == "header"){
            insertHeadImage(data[keys[i]], page)
        }
        if (keys[i].startsWith("field_")){
            writeData(data[keys[i]], page);
        }
    }
    for (var i in keys) {
        if (keys[i].startsWith("card")){
            organizeCardData(data, page);
            break;
        }
    }
}


function insertHeadImage(data, page){
    app.storage.getURL(data)
        .then(url => $("#head-"+page).append(
            "<img src=\""+url+"\" style=\"width:100%; height:99%\"></img>"))
        .catch(error => console.error('Error with file', error));
}

function organizeCardData(data, page){
    var keys = Object.keys(data);
    var cardData = [];
    for (var i in keys) {
        for (var j = 1; j <= keys.length/2; j ++){
            if (keys[i] === ("card" + j + "Head")){
                cardData.push(data[keys[i]]);
            }
            if (keys[i] === ("card" + j + "Body")){
                cardData.push(data[keys[i]]);
            }
        }
    }
    writeCards(cardData, page);
}

function writeCards(data, page){
    for (var i = 0; i < data.length/2; i++){
        $("#content-"+page).append("<ons-card>" + 
            "<div class=\"title\">" + data[i * 2 + 1] + "</div>" + 
            "<div class=\"content\">" + data[i * 2] + "</div>" +
            "</ons-card>");
    }
}

function writeData(data, page){
    if(typeof data == "string"){
        insertText(data, page);
    } else if(typeof data == "object") {
        insertImage(data.toString(), page);
    } else {
        console.log("Not Working");
    }
}

function insertText(data, page){
    $("#content-"+page).append("<p>"+data+"</p>");
}

function insertImage(data, page){
    app.storage.getURL(data)
        .then(url => $("#content-"+page).append(
            "<img src=\""+url+"\" style=\"width:100%; height:99%\"></img>"))
        .catch(error => console.error('Error with file', error));
}
