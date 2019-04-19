

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
       $('body').prepend(request.greeting)
        var protocol = window.location.protocol;
        sendResponse({ proto: protocol });
    }
);