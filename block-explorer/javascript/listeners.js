/**
 * Allows the user to press enter to complete their search.
 */
$("#block").on('keypress',function(e) {
    if(e.which === 13) {
        e.preventDefault();
        $("#searchButton").click();
    }
});