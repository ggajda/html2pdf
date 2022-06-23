const express = require('express'),
    app = express(),
    port = 3000,
    server_message = `HTTP server is worked on port ${port}`;

app.set('view engine', 'html');
app.use(express.static(__dirname + '/public/'));

app.get('/status', (req, res) => {
    res.send(server_message)
})

app.listen(port, () => {
    console.log(server_message + ` http://localhost:${port}`)
})