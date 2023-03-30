// popup.js
window.onload  =  function() {
    chrome.tabs.executeScript( {
    code: "window.getSelection().toString();"
    }, function(selection) {
    chrome.runtime.sendMessage({selection: selection[0]}, function(response) {
    document.getElementById("output").innerHTML  =  response.clips; 
    });
});
};