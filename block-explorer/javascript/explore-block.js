function getBlockData() {
    $(".table tbody").empty();
    let blockHeight = document.getElementById("blockSearch").elements[0].value;
    $.getJSON(`https://api.blockcypher.com/v1/btc/main/blocks/${blockHeight}`, function (data) {

        let blockData = JSON.stringify(data);

        parser = blockData.split(",");
        parser = cleanParser(parser);


        parser.forEach(function (element) {
            let table = element.split(":");
            let field = table[0].replace(/[&\/\\#,+()$~%.'":*?<>{}[\]]/g, '');
            let data = table[1].replace(/[&\/\\#,+()$~%.'":*?<>{}[\]]/g, '');
            let markup = "<tr><td>" + field + "</td><td>" + data;
            $("table tbody").append(markup);
        });




        // `https://api.blockcypher.com/v1/btc/main/blocks/${blockHeight}?txstart=1&limit=1`
        /*
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
        */
    });

}

function cleanParser(parser) {
    let data = [0, 1, 3, 4, 5, 6, 7, 10,
    11,12, 13 , 14, 15, 16, 17];
    let blockData = [];
    for(let i = 0; i < data.length; i++) {
        blockData.push(parser[data[i]]);
    }
    return blockData;
}