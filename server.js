const express = require('express'),
    multer = require('multer'),
    app = express(),
    port = 3000,
    server_message = `HTTP server is worked on port ${port}`;

const storage = multer.diskStorage(
    {
        destination: './uploads/',
        filename: function (req, file, cb) {
            cb(null, file.originalname);
        }
    }
),
    upload = multer({storage});

app.set('view engine', 'html');
app.use(express.static(__dirname + '/public/'));

app.get('/status', (req, res) => {
    res.send(server_message)
})

app.post('/profile', upload.single('KP.pdf'), (req, res) => {
    const file = req.file;

    console.log(file)

    res.send('OK');
})

app.listen(port, () => {
    console.log(server_message + ` http://localhost:${port}`)
})