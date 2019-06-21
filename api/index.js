const Twit = require('twit'),
    Tabletop = require('tabletop'),
    //config = require('./config),
    jsonQuery = require('json-query'),
    helmet = require('helmet'),
    compression = require('compression'),
    //bot = new Twit(config), 
    currentTime = new Date(),
    day = currentTime.getDate(),
    month = currentTime.getMonth()+1,
    cors = require('cors'),
    year = currentTime.getFullYear(),
    express = require('express'),
    expressSanitizer = require('express-sanitizer'),
    timeFormatted = `${year}-${month+1<10 ? '0'+month : month}-${day<10 ? '0'+day : day}`,
    app = express();
require('dotenv').config()

// middleware
app.use(express.json({type: 'application/json'}));
app.use(expressSanitizer());
app.use(express.urlencoded({extended: true}));
app.use(compression());
app.use(helmet());
app.use(cors());

app.get('/', (req, res) => res.sendStatus(202))

// CORS middleware
const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
}

app.use(allowCrossDomain)

// routes
app.get('/', (req, res) => {
    return res.sendStatus(202).send('Okay');
});

app.post('/', (req, res) => {
    let { email, task, idk } = req.body
    console.log(`Email: ${email}\nTask: ${task}\nIDK: ${idk}`)
    res.json({success: true, data: {email, task, idk }})
});
    
app.listen(8081, () => console.log(`API listening on port 8081!\n`));