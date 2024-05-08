const express = require('express');
const os = require('os');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.json({ 
      hostname: os.hostname(),
      processId: process.pid
    });
  });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});