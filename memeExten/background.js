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
    var contents = {}
    contents.url = info.srcUrl;
    
    var url = "http://cse134-135-2014.github.io/cse134_group19/addPage.html";  
    chrome.windows.create({ url: url}, function() {
        chrome.runtime.sendMessage({ contents: contents}, function(response) {});
});
}