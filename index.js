var express = require('express')
var app  = express();
var multer = require('multer');
var upload = multer()

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/pages/homepage.html')
});

app.post('/', upload.single('userfile'), function(req, res){
  if(req.file){
    res.send({
      'file-name': req.file.originalname,
      'file-size': req.file.size
    })
  } else {
    res.send({'error': 'no userfile submitted'})
  }
})

app.listen(process.env.PORT)
