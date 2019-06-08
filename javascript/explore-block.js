function getBlockData(blockHeight) {
    $.getJSON(`https://cors.io/?https://blockchain.info/block-height/${blockHeight}?format=json`, function (data) {
        let blockData = JSON.stringify(data);
        blockData = blockData.substr(12, blockData.length);
        let parser = blockData.split(",");
        parser.forEach(function (element) {
            let table = element.split(":");
            let field = table[0];
            let data = table[1];

            var markup = "<tr><td>" + field + "</td><td>" + data;
            $("table tbody").append(markup);
        });
    });
}