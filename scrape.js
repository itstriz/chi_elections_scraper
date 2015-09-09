var async = require('async');
var $ = require('jquerygo');

$.config.site = 'http://www.chicagoelections.com';

async.series([
    $.go('visit','/en/election3.asp'),
    $('[name=D3]').go('val', '2015 Municipal General - 2/24/15                  '),
    $('input[type=submit]').go('click'),
    $.go('waitForPage'),
    function(done) {
        $.capture(__dirname + '/screenshot.png');
        done();
    }
], function() {
    console.log('Finished');
    $.close();
});
