updateData();

setInterval(function(){
    updateData();
}, 10000);

function updateData() {
    let blockData = [];
    $.getJSON('https://blockchain.info/latestblock?&cors=true', function (data) {
        $.each(data, function(index, element) {
            blockData.push(element);
        });
        $("#latest").text(blockData[3]);
        $("#time").text(blockData[1]);
    });
}