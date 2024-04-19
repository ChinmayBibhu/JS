const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Set up multer for file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'C:/Users/valky/OneDrive/Desktop/Final Year/JS/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname + '-' + Date.now() + path.extname(file.originalname))
    }
});

  

const upload = multer({ storage: storage })

// Serve the HTML form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // Using path.join for file path
});

// Handle form submission
app.post('/submit', upload.single('photo'), (req, res) => {
  // Do something with the uploaded file
  res.send('File uploaded successfully!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
