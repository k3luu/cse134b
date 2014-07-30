chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.contents) {
            var contents = request.contents;
            var string = document.getElementById('newImageUrl');
            string.value = contents.url;
        }
    });