updatePrice();

setInterval(function(){
    updatePrice();
}, 10000);

function updatePrice() {
    $.getJSON('https://blockchain.info/q/24hrprice', function (data) {
        $("#price").text("$" + data);
    });
}