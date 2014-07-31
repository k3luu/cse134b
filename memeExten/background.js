chrome.runtime.onInstalled.addListener(function() {
 var context = "image";
 var title = "Add to MemeMaster Library";
 var id = chrome.contextMenus.create({"title": title, "contexts":[context],
 "id": "context" + context});
});

// add click event
chrome.contextMenus.onClicked.addListener(onClickHandler);


// The onClicked callback function.
function onClickHandler(info, tab) {
    var xml = new XMLHttpRequest();
    xml.onload = function() {
        var yml = new XMLHttpRequest();
        yml.responseType = 'json';
        yml.onload = function() {
            console.log(yml.response.url);
        };
        yml.open('POST', 'https://api.parse.com/1/files/test.jpg');
        yml.setRequestHeader("X-Parse-Application-Id", "8lnVjjPew8kds7OwHV3j0VDtO7eqiQXNtv1mwACQ");
        yml.setRequestHeader("X-Parse-REST-API-Key", "AUVrB3v6VV2utjGmJifyWeBaZHIDbfdvR7NM30VA");
        yml.setRequestHeader("Content-Type", "image/jpeg");
        console.log(yml);
        console.log(xml.response);
        yml.send(xml.response);
    
        //yml.sendAsBinary(xml.response);
    };
    xml.responseType = 'blob';
    xml.open('GET', info.srcUrl);
    xml.send();
    
    var contents = {}
    contents.url = info.srcUrl;
    var url = "addPage.html";  
    chrome.tabs.create({ url: url}, function() {
        chrome.runtime.sendMessage({ contents: contents}, function(response) {});
});
}