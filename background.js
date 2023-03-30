chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    let clippings = [];
    // TODO: plug in api here

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("message", "love your product  but no reply from your team");

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
    };

    // fetch("https://api.text-miner.com/sentiment/", requestOptions)
    // .then(response => response.text())
    // .then(result => clippings = [result])
    // .catch(error => console.log('error', error));



    clippings = [request.selection];
    sendResponse({clips: clippings});
    return true
});