var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const nodemailer = require('nodemailer');

// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});


/**********************
 * Example get method *
 **********************/

app.get('/manonApp', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

app.get('/manonApp/*', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

app.post('/post_name', function (req, res){
  const transporter = nodemailer.createTransport({
      service:'gmail',
      auth:{
          user:'abelcoindozm@gmail.com',
          pass:'mikyyjiyacfidlaf'
      }
  });

  let {name, company, content, email } = req.body;
  
  let details = {
      subject:`Message de ${name} et qui bosse à ${company}`,
      text:`${content + " ." + " Adresse pour les contacter : " + email}`,
      to:`abelcoindozm@gmail.com`,
      from:`${email}`
  }
  transporter.sendMail(details, (err) => {
      if(err){
          res.send(err)
      }else{
          res.send('message sent !')
      }
  })

})
/****************************
* Example post method *
****************************/

app.post('/manonApp', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

app.post('/manonApp/*', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/****************************
* Example put method *
****************************/

app.put('/manonApp', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/manonApp/*', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/****************************
* Example delete method *
****************************/

app.delete('/manonApp', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/manonApp/*', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
