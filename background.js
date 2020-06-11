chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        console.log("backlog:", details.url);
        return {cancel: true};
    },
    {urls: blocked_domains},
    ["blocking"]
);