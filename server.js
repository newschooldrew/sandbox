const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const keys = require('./keys')
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(keys.SENDGRID_API_KEY);
require('dotenv').config()

let mongoUri;

if (process.env.mongoUri == 'production'){
  mongoUri = process.env.mongoUri
} else{
  mongoUri = keys.mongoUri
}

mongoose.connect(mongoUri,{ useNewUrlParser: true ,useUnifiedTopology: true})
mongoose.connection
    .once('open',() => console.log('db is running'))
    .on('error',(err)=>{
        console.log('warning' + err)
    })

mongoose.set('useFindAndModify', false);

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))
app.use(bodyParser.json())

//////////// public key /////////////

app.get("/public-key", (req, res) => {
  // res.send({ publicKey: process.env.PUBLISHABLE_KEY });
  res.send({ publicKey: 'pk_test_51HT8LfCzzxJaDTQLOlBN3RvlngxHhbdnB4cbjCjckp9CEF6kYfzuUAfK8B2jeuRZanoU8clXDkekmFoDVYCW8tAf00TnA2qV1U' });
});


let arr = [];
Array.prototype.remove = function() {
  var what, a = arguments, L = a.length, ax;
  while (L && this.length) {
      what = a[--L];
      while ((ax = this.indexOf(what)) !== -1) {
          this.splice(ax, 1);
      }
  }
  return this;
};

//////////// create order /////////////

app.post('/send-email',async (req,res)=>{
    const {firstName,lastName,email,message} = req.body.myObj;
    const msg = {
      to: `${email}`,
      from: 'drewwperez@gmail.com', // Use the email address or domain you verified above
      subject: 'Message from the Sandbox Site',
      html:`
  <html>
      <body>
          <div style="width: 100%;">
            ${firstName} ${lastName}
            ${message}
          </div>
      </body>
  </html>`
    };
    try {
        // send multiple individual emails to multiple recipients 
        // where they don't see each other's email addresses
        console.log("req.body")
        console.log(req.body.myObj)
        // await sgMail.sendMultiple(msg);
        await sgMail.send(msg);
      } catch (error) {
        console.error(error);
    
        if (error.response) {
          console.error("error.response.body:")
          console.error(error.response.body)
        }
      }

      res.send(req.body.myObj)

})

if(process.env.NODE_ENV == 'production'){
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*',(req,res) =>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}

  const PORT = process.env.PORT || 5000

app.listen(PORT,() => console.log("app running on port 5000"))