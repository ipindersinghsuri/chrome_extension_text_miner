
function myFunction() {
    $(document).click(function(){
        var selection = window.getSelection()
        var selectionText = selection.anchorNode.data;
        
        if (selectionText) {
            console.log(selectionText);
            var settings = {
                "url": "https://api.text-miner.com/sentiment/",
                "method": "POST",
                "timeout": 0,
                "headers": {
                  "Content-Type": "application/x-www-form-urlencoded"
                },
                "data": {
                  "message": selectionText
                }
              };
              
              $.ajax(settings).done(function (response) {
                const data = $.parseJSON(response);
                console.log(data);
                var sentiment_score = data.sentiment_score;
                var msg = "score: " + sentiment_score;
                console.log(msg);
                if (parseFloat(data.positive_sentiment_percentage) > parseFloat(data.negative_sentiment_percentage)) {
                    msg = "Positive Sentiment with " + msg
                }
                else {
                    msg = "Negative Sentiment with " + msg
                }
                var text = document.createTextNode(msg);
                debugger;
                selection.focusNode.parentNode.insertBefore(text, selection.focusNode);
              });
        }
    });
}

setTimeout(myFunction(), 1000); // this makes sure that jquery is loaded before we access '$'

