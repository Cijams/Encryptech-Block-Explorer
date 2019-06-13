/**
 * Gets the newest price of Bitcoin and updates
 * every 10 seconds.
 */
updatePrice();
setInterval(function(){
    updatePrice();
}, 10000);

function updatePrice() {
    $.getJSON('https://blockchain.info/q/24hrprice', function (data) {
        $("#price").text("$" + data);
    });
}

