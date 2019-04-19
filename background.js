chrome.tabs.onUpdated.addListener(function (tabid, changedInfo, tab) {
    if (changedInfo.status === "complete") {
        $.get('text.txt', function (data) {
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, { greeting: data }, function (response) {
                    console.log(response.proto);
                });
            })
        })
    
    }
});