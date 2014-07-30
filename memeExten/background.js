// Set up context menu at install time.
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
  //var sText = info.selectionText;
  var url = "http://cse134-135-2014.github.io/cse134_group19/addPage.html";  
  window.open(url, '_blank');
};