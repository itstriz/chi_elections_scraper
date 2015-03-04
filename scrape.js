var $ = require('jquerygo');
$.config.AddJQuery = false;

$.visit('http://www.chicagoelections.com/en/election3.asp', function() {
    $('[name=D3]').val('2015 Municipal General - 2/24/15                  ', function() {
        $.capture(__dirname + '/screenshot.png');
    });
    $.close();
});
