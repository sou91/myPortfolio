const express = require('express');
var cors = require('cors')
var bodyParser=require("body-parser");
require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 5000;

const mailjet = require ('node-mailjet').connect('fb33d84faa0387a436016d9cb3b5d6ae', '1af760e9af3263cd3b2d461fc50035b9')

  app.use(cors({
    corsOptions
  }))
  
  // Answer API requests.
  app.post('/mail',function (req, res) {
    console.log(req)
    console.log('hi')
    res.set("Content-Type", "application/json");
    const request = mailjet.post("send", { 'version': 'v3.1' }).request({
      "Messages": [
        {
          "From": {
            "Email": "sourabh.sontakke91@gmail.com",
            "Name": "Sourabh"
          },
          "To": [
            {
              "Email": "sourabh.sontakke91@gmail.com",
              "Name": "Sourabh Sontakke"
            }
          ],
          "Subject": "SS Portfolio | Feedback",
          "TextPart": "Feedback",
          "HTMLPart": "<h3>FeedBack</h3><p>"+req.body.userMessage+"</p>",
          "CustomID": "portfolio-feedback"
        }
      ]
    })
    request
      .then((result) => {
        console.log('Email Sent')
        res.send({
          msg : 'success'
        });
      })
      .catch((err) => {
        res.send({
          msg : 'fail'
        });
        console.log(err.statusCode)
      })
  });




  app.listen(PORT, function () {
    console.error(`Node ${isDev ? 'dev server' : 'cluster worker ' + process.pid}: listening on port ${PORT}`);
  });
