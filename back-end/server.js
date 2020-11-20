const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
var nodemailer = require('nodemailer');


const goalSchema = new mongoose.Schema({
    title: String,
    description: String,
    doers: Number,
});

const doneSchema = new mongoose.Schema({
    completed: Number,
})

const Goal = mongoose.model('Goal', goalSchema);
const Completed = mongoose.model('Completed', doneSchema);

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'concactcreative4@gmail.com',
      pass: 'thisisapassword'
    }
  });
  
  var mailOptions = {
    from: 'concactcreative4@gmail.com',
    to: 'eiwhitt.99@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
     //
    } else {
      //console.log('Email sent: ' + info.response);
    }
  });

// connect to the database
mongoose.connect('mongodb://localhost:27017/goals', {
  useNewUrlParser: true
});


app.get('/api/goals', async (req, res) => {
    try {
        let goals = await Goal.find();
        res.send(goals);
    } catch(error) {
        //Catch Error
        res.sendStatus(500);
    }

});


app.get('/api/completed', async (req, res) => {
    try {
        let completed = await Completed.find();
        res.send(completed);
    } catch(error) {
        //Catch Error
        res.sendStatus(500);
    }

});

app.post('/api/complete', async (req, res) => {
    const completed = new Completed({
        completed: 1,
    });
    try {
        await completed.save();
        res.send(completed);
    } catch(error) {
        res.sendStatus(500);
    }
});

app.delete('/api/deletegoal/:id', async(req, res) => {
    try {
        await Goal.deleteOne({
            _id: req.params.id
        });
        res.sendStatus(200);
    } catch(error) {
        res.sendStatus(500);
    }
})

app.post('/api/post', async (req, res) => {
    const goal = new Goal({
      title: req.body.title,
      description: req.body.description,
      doers: 1,
    });
    try {
      await goal.save();
      res.send(goal);
    } catch (error) {
      res.sendStatus(500);
    }
  });


app.listen(3000, () => console.log('Server listening on port 3000!'));