function getBlockData() {
    $(".table tbody").empty();
    let blockHeight = document.getElementById("blockSearch").elements[0].value;
    $.getJSON(`https://cors.io/?https://blockchain.info/block-height/${blockHeight}?format=json`, function (data) {
        let blockData = JSON.stringify(data);
        blockData = blockData.substr(12, blockData.length);
        let parser = blockData.split(",");
        parser = cleanParser(parser);

        parser.forEach(function (element) {
            let table = element.split(":");
            let field = table[0].replace(/[&\/\\#,+()$~%.'":*?<>{}[\]]/g, '');
            let data = table[1].replace(/[&\/\\#,+()$~%.'":*?<>{}[\]]/g, '');
            let markup = "<tr><td>" + field + "</td><td>" + data;
            $("table tbody").append(markup);
        });
    });
}

function cleanParser(parser) {
    let data = [13, 0, 2, 3, 5, 6, 7, 8, 10, 11, 4];
    let blockData = [];
    for(let i = 0; i < data.length; i++) {
        blockData.push(parser[data[i]]);
    }
    return blockData;
}