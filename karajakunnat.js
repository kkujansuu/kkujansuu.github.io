$(document).ready(function() {
    // from https://css-tricks.com/snippets/jquery/make-jquery-contains-case-insensitive/
    $.expr[":"].contains = $.expr.createPseudo(function(arg) {
        return function( elem ) {
            return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
        };
    });
    
    // from https://stackoverflow.com/questions/10011385/jquery-search-in-static-html-page-with-highlighting-of-found-word
    $('#searchfor').keypress(function(e){
        if (e.keyCode != 13) return true;
        var searchedText = $('#searchfor').val();
        if (searchedText.trim() == "") {
            $("tr.paikka").show();
            return;
        }
            
        $("tr.paikka").hide();
        $("td.paikka:contains('" + searchedText + "')").each( function( i, td ) {
            var n = $(td).attr("n");
            $("tr[n="+n+"]").show();
        });
    });

    $("#navi a").click( function(e) {
        $("tr").show();
    });

});
       
