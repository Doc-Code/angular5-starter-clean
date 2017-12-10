var express = require('express');

var path = require("path");

var app = express();
app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(__dirname + '/public'));
app.use('/scripts', express.static(__dirname + '/node_modules'));


app.use(function (req, res, next) {
    if (path.extname(req.path).length > 0) {
        // normal static file request
        next();
    }
    else {
        // redirect all html requests to `aindex.html`
        res.sendFile(path.resolve(__dirname + '/aindex.html'));
    }
});

app.listen(app.get('port'), function() {
    console.log('Angular2 fullstack listening on port '+app.get('port'));
});