require('dotenv').config({ path: '.env' });

const express = require('express'),
    multer = require('multer'),
    nodemailer = require('nodemailer');

const app = express(),
    port = process.env.PORT || 3000,
    server_message = `HTTP server is worked on port ${port}`;

const storage = multer.diskStorage(
    {
        destination: './uploads/',
        filename: function (req, file, cb) {
            cb(null, file.originalname);
        }
    }
),
    upload = multer({ storage });

// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
});

app.set('view engine', 'html');
app.use(express.static(__dirname + '/public/'));

app.get('/status', (req, res) => {
    res.send(server_message)
})

app.post('/profile', upload.single('KP.pdf'), (req, res) => {
    // const file = req.file;

    // console.log(file)

    // res.send('OK');
    let transporter = nodemailer.createTransport({
        host: 'smtp.webio.pl',
        port: 587,
        secure: false,
        auth: {
            user: 'service@topconservice.pl',
            pass: process.env.PASS
        },
    });

    let message = {
        from: '"Topcon Service" <service@topconservice.pl>',
        to: 'g.gajda1976@gmail.com',
        subject: `KP nr: 3`,
        text: "Ustaw klienta poczty do odczytu wiadomości w fromacie HTML aby otrzymać potwiedzenie zgłosznia serwisowego!",
        html: "<h2>Test OK</h>",
        attachments: [
            {
                filename: 'KP.pdf',
                path: './uploads/KP.pdf' 
            }
        ]
    };

    transporter.sendMail(message, (err, info) => {
        res.send(info.response);
        if (err) {
            console.log(err.message);
            res.send(err.message)
        }
    })    
})

app.get('/mail', (req, res) => {

    let transporter = nodemailer.createTransport({
        host: 'smtp.webio.pl',
        port: 587,
        secure: false,
        auth: {
            user: 'service@topconservice.pl',
            pass: process.env.PASS
        },
    });

    let message = {
        from: '"Topcon Service" <service@topconservice.pl>',
        to: 'g.gajda1976@gmail.com',
        subject: `KP nr: 2`,
        text: "Ustaw klienta poczty do odczytu wiadomości w fromacie HTML aby otrzymać potwiedzenie zgłosznia serwisowego!",
        html: "<h2>Test OK</h>",
        attachments: [
            {
                filename: 'KP.pdf',
                path: './uploads/KP.pdf' 
            }
        ]
    };

    transporter.sendMail(message, (err, info) => {
        res.send(info.response);
        if (err) {
            console.log(err.message);
            res.send(err.message)
        }
    })
})

app.listen(port, () => {
    console.log(server_message + ` http://localhost:${port}`)
})