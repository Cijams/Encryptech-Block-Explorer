/**
 * Retrieve the data of a block in the Bitcoin network by height.
 */
function getBlockData() {
    $(".table tbody").empty();
    let blockHeight = document.getElementById("blockSearch").elements[0].value;
    $.getJSON(`https://api.blockcypher.com/v1/btc/main/blocks/${blockHeight}`, function (data) {
        let blockData = JSON.stringify(data);
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

/**
 * Cleans up the data set, picks the right points and
 * removes all of the JSON formatting.
 * @param parser
 * @returns {Array}
 */
function cleanParser(parser) {
    let data = [0, 1, 3, 4, 5, 6, 7, 10,
        11, 12, 13, 14, 15, 16, 17];
    let blockData = [];
    for (let i = 0; i < data.length; i++) {
        blockData.push(parser[data[i]]);
    }
    return blockData;
}