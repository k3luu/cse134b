// Set up context menu at install time.
chrome.contextMenus.create( {
    'title': 'Add to MemeMaster Library',
    'contexts': ['image'],
    'onclick': onClickHandler
});

// The onClicked callback function.
function onClickHandler(info, tab) {
    var contents = {}
    contents.url = info.srcUrl;
    
    var url = "addWindow.html";  
    chrome.windows.create({ url: url}, function() {
        chrome.runtime.sendMessage({ contents: contents}, function(response) {});
});
}